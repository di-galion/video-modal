import Janus from 'janus-gateway';
import { useLayoutEffect, useRef } from 'react';
import adapter from 'webrtc-adapter';

interface InitConfig {
    room: number;
    id: number;
    onData?: Function;
    onLocalStream?: (stream: MediaStream) => void;
    onRemoteStream?: (stream: MediaStream) => void;
}

const SERVER_URL = import.meta.env.VITE_JANUS_URL;

class JanusAdapter {
    // store the janusInstance to be used in other functions
    private janusInstance: Janus | null = null;
    // the configurations of the janusInstance
    private janusConfig: InitConfig | null = null;
    // store the VideoRoom plugin instance
    private publisherSfu: any;

    debug(message: any, _r?: any) {
        console.log(message);
    }

    private remoteTracks: MediaStreamTrack[] = [];

    public init(config: InitConfig): Promise<void> {
        return new Promise((resolve, reject) => {
            Janus.init({
                dependencies: Janus.useDefaultDependencies({ adapter }),
                callback: () => {
                    const janus = new Janus({
                        server: SERVER_URL,
                        success: () => {
                            this.janusInstance = janus;
                            this.janusConfig = config;
                            //if (typeof config.debug === 'undefined')
                            //   this.janusConfig.debug = false;
                            this.debug('Janus initialized successfully!');
                            resolve();
                        },
                        error: (err: string) => {
                            console.log(err);
                            console.error(
                                'Janus Initialization failed! Exiting...',
                                err
                            );
                            reject();
                        },
                    });
                },
            });
        });
    }

    public publish(stream: MediaStream): Promise<void> {
        return new Promise((resolve, reject) => {
            // Attach the videoroom plugin
            this.janusInstance!.attach!({
                plugin: 'janus.plugin.videoroom',
                opaqueId: Janus.randomString(12),
                success: (pluginHandle: any) => {
                    this.debug('Publisher plugin attached!');
                    this.debug(pluginHandle);
                    // Set the SFU object
                    this.publisherSfu = pluginHandle;

                    // Request to join the room
                    let request: { [key: string]: any } = {
                        request: 'join',
                        room: this.janusConfig!.room,
                        ptype: 'publisher',
                        id: this.janusConfig!.id,
                    };
                    //if (this.janusConfig!.display)
                    //  request.display = this.janusConfig!.display;

                    pluginHandle.send({ message: request });
                },
                onmessage: async (message: any, jsep: any) => {
                    if (jsep) {
                        this.debug({ message, jsep });
                    } else {
                        this.debug(message);
                    }

                    if (message.videoroom === 'joined') {
                        // Joined successfully, create SDP Offer with our stream
                        this.debug('Joined room! Creating offer...');

                        //if (this.janusConfig!.onJoined) this.janusConfig!.onJoined(message.description);

                        let mediaConfig = {};

                        if (stream === null || typeof stream === 'undefined') {
                            mediaConfig = {
                                audioSend: false,
                                videoSend: false,
                            };
                        } else {
                            mediaConfig = {
                                audioSend: true,
                                videoSend: true,
                            };
                        }

                        if (typeof this.janusConfig!.onData === 'function') {
                            mediaConfig = { ...mediaConfig, data: true };
                        }

                        this.debug('Media Configuration for Publisher set! ->');
                        this.debug(mediaConfig);

                        this.publisherSfu.createOffer({
                            media: mediaConfig,
                            stream: stream ? stream : undefined,
                            success: (sdpAnswer: string) => {
                                // SDP Offer answered, publish our stream
                                this.debug(
                                    'Offer answered! Start publishing...'
                                );
                                let publish = {
                                    request: 'configure',
                                    audio: true,
                                    video: true,
                                    data: true,
                                };
                                this.publisherSfu.send({
                                    message: publish,
                                    jsep: sdpAnswer,
                                });
                            },
                        });
                    } else if (message.videoroom === 'destroyed') {
                        // Room has been destroyed, time to leave...
                        this.debug('Room destroyed! Time to leave...');
                        //if(this.janusConfig!.onDestroy)
                        //  this.janusConfig!.onDestroy();
                        resolve();
                    }

                    if (message.unpublished) {
                        // We've gotten unpublished (disconnected, maybe?), leaving...
                        if (message.unpublished === 'ok') {
                            this.debug(
                                "We've gotten disconnected, hanging up..."
                            );
                            this.publisherSfu.hangup();
                        } else {
                            //if (this.janusConfig!.onLeave)
                            //    this.janusConfig!.onLeave(message.unpublished);
                        }
                        resolve();
                    }

                    if (jsep) {
                        this.debug('Handling remote JSEP SDP');
                        this.debug(jsep);
                        this.publisherSfu.handleRemoteJsep({ jsep: jsep });
                    }
                },
                onlocaltrack: (localTrack: MediaStreamTrack) => {
                    this.debug('Successfully published local track');
                    if (this.janusConfig!.onLocalStream) {
                        this.janusConfig!.onLocalStream(
                            new MediaStream([localTrack])
                        );
                    }
                },
                error: (err: string) => {
                    this.debug('Publish: Janus VideoRoom Plugin Error!', true);
                    this.debug(err, true);
                    reject();
                },
            });
        });
    }

    public subscribe(id: number): Promise<MediaStream> {
        return new Promise((resolve, reject) => {
            let sfu: any = null;

            this.janusInstance!.attach!({
                plugin: 'janus.plugin.videoroom',
                opaqueId: Janus.randomString(12),
                success: (pluginHandle: any) => {
                    this.debug('Remote Stream Plugin attached.');
                    this.debug(pluginHandle);

                    sfu = pluginHandle;
                    sfu.send({
                        message: {
                            request: 'join',
                            room: this.janusConfig!.room,
                            feed: id,
                            ptype: 'subscriber',
                        },
                    });
                },
                onmessage: (message: any, jsep: any) => {
                    if (message.videoroom === 'attached' && jsep) {
                        this.debug(
                            'Attached as subscriber and got SDP Offer! \nCreating answer...'
                        );

                        sfu.createAnswer({
                            jsep: jsep,
                            media: {
                                audioSend: false,
                                videoSend: false,
                                data: true,
                            },
                            success: (answer: string) => {
                                sfu.send({
                                    message: {
                                        request: 'start',
                                        room: this.janusConfig!.room,
                                    },
                                    jsep: answer,
                                    success: () => {
                                        this.debug('Answer sent successfully!');
                                    },
                                    error: (err: string) => {
                                        this.debug(
                                            'Error answering to received SDP offer...'
                                        );
                                        this.debug(err, true);
                                    },
                                });
                            },
                        });
                    }
                },
                onremotetrack: (track) => {
                    this.remoteTracks.push(track);

                    if (this.janusConfig!.onRemoteStream) {
                        this.janusConfig!.onRemoteStream(
                            new MediaStream(this.remoteTracks)
                        );
                    }
                },
                error: (err: string) => {
                    this.debug(
                        'Remote Feed: Janus VideoRoom Plugin Error!',
                        true
                    );
                    this.debug(err, true);
                    reject(err);
                },
            });
        });
    }
}

export const JanusPage = () => {
    //const [src, setSrc] = useState<MediaStream | undefined>();

    const adapter = useRef(new JanusAdapter());

    useLayoutEffect(() => {
        adapter.current
            .init({
                id: 1,
                room: 1,
                onRemoteStream: (stream) => {
                    const video = document.querySelector(
                        'video'
                    ) as HTMLVideoElement;
                    if ('srcObject' in video) {
                        video.srcObject = stream;
                    } else {
                        (video as any).src = window.URL.createObjectURL(
                            stream as any
                        );
                    }
                },
            })
            .then();
    }, []);

    const publish = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then(function (stream) {
                adapter.current.publish(stream).then();
            });
    };

    const watch = () => {
        adapter.current.subscribe(1).then();
    };

    return (
        <div>
            <video id="video" autoPlay></video>
            <button onClick={publish}>Publish</button>
            <br />
            <button onClick={watch}>Watch</button>
        </div>
    );
};
