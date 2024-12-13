import Janus from 'janus-gateway';
import { useLayoutEffect, useRef, useState } from 'react';
import adapter from 'webrtc-adapter';
import { JanusAdapter } from '../../api/janus/janus.class';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
/*
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

    //private remoteTracks: MediaStreamTrack[] = [];
    private localTracks: MediaStreamTrack[] = [];
    private remoteVideoTrack?: MediaStreamTrack;
    private remoteAudioTrack?: MediaStreamTrack;

    public init(config: InitConfig): Promise<void> {
        return new Promise((resolve, reject) => {
            Janus.init({
                dependencies: Janus.useDefaultDependencies({ adapter }),

                callback: () => {
                    const janus = new Janus({
                        server: SERVER_URL,
                        apisecret: 'janusrocks',
                        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
                        success: () => {
                            this.janusInstance = janus;
                            this.janusConfig = config;
                            console.log('Janus initialized successfully!');
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

    public publish(
        stream: MediaStream,
        id: number,
        isCreateRoom: boolean
    ): Promise<void> {
        console.log('publish');
        return new Promise((resolve, reject) => {
            // Attach the videoroom plugin
            console.log('attach');
            this.janusInstance!.attach!({
                plugin: 'janus.plugin.videoroom',
                opaqueId: Janus.randomString(12),
                success: (pluginHandle: any) => {
                    console.log('Publisher plugin attached!');
                    // Set the SFU object
                    this.publisherSfu = pluginHandle;

                    if (isCreateRoom) {
                        var createRoom = {
                            request: 'create',
                            record: true,
                            room: this.janusConfig!.room,
                            publishers: 1,
                        };
                        this.publisherSfu.send({ message: createRoom });
                    }

                    // Request to join the room
                    let request: { [key: string]: any } = {
                        request: 'join',
                        room: this.janusConfig!.room,
                        ptype: 'publisher',
                        id, //this.janusConfig!.id,
                    };
                    //if (this.janusConfig!.display)
                    //  request.display = this.janusConfig!.display;

                    pluginHandle.send({ message: request });
                },
                onmessage: async (message: any, jsep: any) => {
                    if (jsep) {
                        console.log({ message, jsep });
                    } else {
                        console.log(message);
                    }

                    if (message.videoroom === 'joined') {
                        // Joined successfully, create SDP Offer with our stream
                        console.log('Joined room! Creating offer...');

                        this.publisherSfu.createOffer({
                            tracks: [
                                { type: 'audio', capture: true, recv: true },
                                { type: 'video', capture: true, recv: true },
                                { type: 'data' },
                            ],
                            success: (jsep) => {
                                console.log('jsep', jsep);
                                const publish = {
                                    request: 'configure',
                                    jsep: jsep,
                                    audio: true,
                                    video: true,
                                    data: true,
                                };
                                this.publisherSfu.send({
                                    message: publish,
                                    jsep: jsep,
                                    error: (err) => console.log(err),
                                });
                            },
                            error: (error) => {
                                console.error('Error creating offer:', error);
                            },
                        });
                    } else if (message.videoroom === 'destroyed') {
                        console.log('Room destroyed! Time to leave...');
                        resolve();
                    }

                    if (message.unpublished) {
                        // We've gotten unpublished (disconnected, maybe?), leaving...
                        if (message.unpublished === 'ok') {
                            console.log(
                                "We've gotten disconnected, hanging up..."
                            );
                            this.publisherSfu.hangup();
                        } else {
                        }
                        resolve();
                    }

                    if (jsep) {
                        console.log('Handling remote JSEP SDP');
                        console.log(jsep);
                        this.publisherSfu.handleRemoteJsep({ jsep: jsep });
                    }
                },
                onlocaltrack: (localTrack: MediaStreamTrack) => {
                    console.log('Successfully published local track');
                    console.log(localTrack);
                    this.localTracks.push(localTrack);
                    if (this.janusConfig!.onLocalStream) {
                        this.janusConfig!.onLocalStream(
                            new MediaStream(this.localTracks)
                        );
                    }
                },
                error: (err: string) => {
                    console.log('Publish: Janus VideoRoom Plugin Error!', true);
                    console.log(err, true);
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
                    console.log('Remote Stream Plugin attached.');
                    console.log(pluginHandle);

                    sfu = pluginHandle;
                    sfu.send({
                        message: {
                            request: 'join',
                            room: this.janusConfig!.room,
                            feed: id,
                            ptype: 'subscriber',
                            streams: [{ feed: id }],
                        },
                        error: (err: string) => console.log(err),
                    });
                },
                onmessage: (message: any, jsep: any) => {
                    if (message.videoroom === 'attached' && jsep) {
                        console.log(
                            'Attached as subscriber and got SDP Offer! \nCreating answer...'
                        );

                        sfu.createAnswer({
                            jsep: jsep,
                            tracks: [
                                { type: 'audio' },
                                { type: 'video' },
                                { type: 'data' },
                            ],

                            success: (answer: string) => {
                                console.log('answrer', answer);
                                sfu.send({
                                    message: {
                                        request: 'start',
                                        room: this.janusConfig!.room,
                                    },
                                    jsep: answer,
                                    success: () => {
                                        console.log(
                                            'Answer sent successfully!'
                                        );
                                    },
                                    error: (err: string) => {
                                        console.log(
                                            'Error answering to received SDP offer...'
                                        );
                                        console.log(err, true);
                                    },
                                });
                            },
                            error: (err: string) => console.log(err),
                        });
                    }
                },
                onremotetrack: (track, mid, on, metadata) => {
                    console.log('onremotetrack', track, mid, on, metadata);

                    if (on) {
                        if (mid === 'audio') {
                            this.remoteAudioTrack = track;
                        } else if (mid === 'video') {
                            this.remoteVideoTrack = track;
                        }
                        if (this.remoteAudioTrack && this.remoteVideoTrack) {
                            console.log('MediaStream ready');
                            this.janusConfig!.onRemoteStream &&
                                this.janusConfig!.onRemoteStream(
                                    new MediaStream([
                                        this.remoteAudioTrack,
                                        this.remoteVideoTrack,
                                    ])
                                );
                        }
                    }
                },
                error: (err: string) => {
                    console.log(
                        'Remote Feed: Janus VideoRoom Plugin Error!',
                        true
                    );
                    console.log(err, true);
                    reject(err);
                },
            });
        });
    }
}

const PUBLISHER_ID = 1;
const SUBSCRIBER_ID = 1;

let localStream: MediaStream;*/

const jasusAdapter = new JanusAdapter();

export const JanusPage = () => {
    //const [src, setSrc] = useState<MediaStream | undefined>();

    //const jasusAdapter = useRef(new JanusAdapter());

    const [room, setRoom] = useState('100');
    const [createRoom, setCreateRoom] = useState(true);

    /*const create = () => {
        return jasusAdapter.current
            .init({
                id: 1,
                room: Number(room),
                onLocalStream: (stream) => {
                    localStream = stream;
                    console.log('localStream', localStream);
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
                onRemoteStream: (stream: MediaStream) => {
                    const video = document.querySelector(
                        'video'
                    ) as HTMLVideoElement;

                    Janus.attachMediaStream(video, stream);
                },
            })
            .then();
    };

    const publish = (isCreateRoom: boolean) => {
        create().then(() =>
            jasusAdapter.current
                .publish(localStream, PUBLISHER_ID, isCreateRoom)
                .then()
        );
    };

    const watch = () => {
        create().then(() =>
            jasusAdapter.current.subscribe(SUBSCRIBER_ID).then()
        );
    };*/

    const onLocalStream = (stream: MediaStream) => {
        const video = document.querySelector(
            '#video-local'
        ) as HTMLVideoElement;

        Janus.attachMediaStream(video, stream);

        console.log('onLocalStream', stream, video);
    };

    const onRemoteStream = (stream: MediaStream) => {
        const video = document.querySelector(
            '#video-remote'
        ) as HTMLVideoElement;

        Janus.attachMediaStream(video, stream);

        console.log('onRemoteStream', stream, video);
    };

    const publish = (isCreateRoom: boolean) => {
        jasusAdapter.publish(1, Number(room), () => {});
    };

    const watch = () => {
        jasusAdapter.subscribe(1, Number(room), onRemoteStream);
    };

    const { sendAction } = useWebSocket();

    const teacher = () => {
        jasusAdapter.publish(1, Number(room), onLocalStream);
        jasusAdapter.subscribe(2, Number(room), onRemoteStream);
        sendAction('janus', {}, false);
    };

    useWsAction((name) => {
        switch (name) {
            case 'janus':
                student();
                break;
        }
    });

    const student = () => {
        jasusAdapter.publish(2, Number(room), onLocalStream, false);
        jasusAdapter.subscribe(1, Number(room), onRemoteStream);
    };

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    zIndex: 100,
                    top: 20,
                    right: 20,
                    border: '2px solid black',
                }}
            >
                <button onClick={teacher}>Teacher</button>
                <br />
                <button onClick={student}>Student</button>
                <br />
                <button onClick={() => publish(createRoom)}>Publish</button>
                <input value={room} onChange={(e) => setRoom(e.target.value)} />
                Create room
                <input
                    type="checkbox"
                    checked={createRoom}
                    onChange={(e) => setCreateRoom(e.target.checked)}
                />
                <br />
                <button onClick={watch}>Watch</button>
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    Local
                    <video
                        id="video-local"
                        autoPlay
                        width="600"
                        height="400"
                    ></video>
                </div>
                <div>
                    Remote
                    <video
                        id="video-remote"
                        autoPlay
                        width="600"
                        height="400"
                    ></video>
                </div>
            </div>
        </div>
    );
};
