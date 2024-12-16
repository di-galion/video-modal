import Janus, { JanusJS } from 'janus-gateway';
import adapter from 'webrtc-adapter';

interface RemoteTrackMetadata {
    reason: 'created' | 'ended' | 'mute' | 'unmute';
}

const SERVER_URL = import.meta.env.VITE_JANUS_URL;
const API_SECRET = import.meta.env.VITE_JANUS_API_SECRET;

export class JanusAdapter {
    private janusInstance: Janus | null = null;
    private remoteAudioTrack: MediaStreamTrack | null = null;
    private remoteVideoTrack: MediaStreamTrack | null = null;
    private localVideoTrack: MediaStreamTrack | null = null;

    constructor() {
        //this.init();
    }

    public init(): Promise<void> {
        return new Promise((resolve, reject) => {
            Janus.init({
                dependencies: Janus.useDefaultDependencies({ adapter }),

                callback: () => {
                    const janus = new Janus({
                        server: SERVER_URL,
                        apisecret: API_SECRET,
                        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
                        success: () => {
                            this.janusInstance = janus;
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

    public attach({
        onMessage,
        onRemoteTrack,
        onLocalTrack,
    }: {
        onMessage: (
            handle: JanusJS.PluginHandle,
            message: JanusJS.Message,
            jsep?: JanusJS.JSEP
        ) => void;
        onRemoteTrack?: (
            track: MediaStreamTrack,
            mid: string,
            on: boolean,
            metadata?: RemoteTrackMetadata
        ) => void;
        onLocalTrack?: (track: MediaStreamTrack, on: boolean) => void;
    }) {
        let handle: JanusJS.PluginHandle;

        return new Promise<JanusJS.PluginHandle>((resolve, reject) => {
            // Attach the videoroom plugin
            console.log('attach');
            this.janusInstance!.attach!({
                plugin: 'janus.plugin.videoroom',
                opaqueId: Janus.randomString(12),
                success: (pluginHandle) => {
                    handle = pluginHandle;
                    resolve(pluginHandle);
                },
                error: (err: string) => {
                    console.error(err);
                    reject(err);
                },
                onmessage: (message, jsep) => {
                    onMessage(handle, message, jsep);
                },
                onremotetrack: (track, mid, on, metadata) => {
                    onRemoteTrack && onRemoteTrack(track, mid, on, metadata);
                },
                onlocaltrack: (track, on) => {
                    onLocalTrack && onLocalTrack(track, on);
                },
            });
        });
    }

    public join(
        handle: JanusJS.PluginHandle,
        room: number,
        id: number,
        type: 'publisher' | 'subscriber'
    ) {
        return new Promise<void>((resolve, reject) => {
            const request: any = {
                request: 'join',
                room,
                ptype: type,
            };

            if (type === 'publisher') {
                request.id = id;
            } else {
                request.feed = id;
            }

            handle.send({
                message: request,
                success: () => resolve(),
                error: (err) => {
                    console.error(err);
                    reject(err);
                },
            });
        });
    }

    public subscribeTo(handle: JanusJS.PluginHandle, id: number) {
        return new Promise<void>((resolve, reject) => {
            const request: any = {
                request: 'subscribe',
                streams: [{ feed: id }],
            };

            handle.send({
                message: request,
                success: () => resolve(),
                error: (err) => {
                    console.error(err);
                    reject(err);
                },
            });
        });
    }

    public createRoom(
        handle: JanusJS.PluginHandle,
        roomId: number,
        countPublishers = 2
    ) {
        return new Promise<void>((resolve, reject) => {
            const existsRoom = {
                request: 'exists',
                room: roomId,
            };

            const createRoom = {
                request: 'create',
                record: true,
                room: roomId,
                publishers: countPublishers,
            };

            handle.send({
                message: existsRoom,
                error: (err) => {
                    console.error("can't create room on second loop");
                    reject(err);
                },
                success: ({ exists }) => {
                    if (exists) {
                        console.log('room exists. will removed');
                        const destroyRoom = {
                            request: 'destroy',
                            room: roomId,
                            permanent: true,
                        };

                        handle.send({
                            message: destroyRoom,
                            error: (err) => {
                                console.error("can't destroy room");
                                reject(err);
                            },
                            success: () => {
                                handle.send({
                                    message: createRoom,
                                    error: (err) => {
                                        console.log(
                                            "can't create room. maybe it is exists. will remove"
                                        );
                                        console.error(
                                            "can't create room on second loop"
                                        );
                                        reject(err);
                                    },
                                    success: () => {
                                        console.log(
                                            'room destroyed and created'
                                        );
                                        resolve();
                                    },
                                });
                            },
                        });
                    } else {
                        console.log('room not exists. will created');

                        handle.send({
                            message: createRoom,
                            error: () => {
                                console.log(
                                    "can't create room. maybe it exists. it will be removed"
                                );
                            },
                            success: () => {
                                console.log('room created');
                                resolve();
                            },
                        });
                    }
                },
            });
        });
    }

    public async publish(
        id: number,
        room: number,
        onLocalStream: (track: MediaStream) => void,
        isCreateRoom = true
    ): Promise<void> {
        return new Promise(async (res) => {
            await this.init();
            const handle = await this.attach({
                onMessage: (handle, message, jsep) => {
                    console.log('message', message);
                    if (message.videoroom === 'joined') {
                        console.log('Joined room! Creating offer...');

                        handle.createOffer({
                            tracks: [
                                { type: 'audio', capture: true, recv: true },
                                { type: 'video', capture: true, recv: true },
                            ],
                            success: (jsep) => {
                                console.log('jsep', jsep);
                                const publish = {
                                    request: 'publish',
                                    jsep: jsep,
                                    audio: true,
                                    video: true,
                                };
                                handle.send({
                                    message: publish,
                                    jsep: jsep,
                                    error: (err) => console.log(err),
                                    success: () => res(),
                                });
                            },
                            error: (error) => {
                                console.error('Error creating offer:', error);
                            },
                        });
                    } else if (message.videoroom === 'destroyed') {
                        // Room has been destroyed, time to leave...
                        console.log('Room destroyed! Time to leave...');
                        //if(this.janusConfig!.onDestroy)
                        //  this.janusConfig!.onDestroy();
                    }

                    if (message.unpublished) {
                        // We've gotten unpublished (disconnected, maybe?), leaving...
                        if (message.unpublished === 'ok') {
                            console.log(
                                "We've gotten disconnected, hanging up..."
                            );
                            handle.hangup();
                        } else {
                            //if (this.janusConfig!.onLeave)
                            //    this.janusConfig!.onLeave(message.unpublished);
                        }
                    }

                    if (jsep) {
                        console.log('Handling remote JSEP SDP');
                        console.log(jsep);
                        handle.handleRemoteJsep({ jsep: jsep });
                    }
                },
                onLocalTrack: (track, on) => {
                    if (on && track.kind === 'video') {
                        this.localVideoTrack = track;
                        if (onLocalStream) {
                            onLocalStream(
                                new MediaStream([this.localVideoTrack])
                            );
                        }
                    }
                },
            });
            if (isCreateRoom) {
                await this.createRoom(handle, room);
            }
            await this.join(handle, room, id, 'publisher');
        });
    }

    public async subscribe(
        id: number,
        room: number,
        onRemoteStream: (stream: MediaStream) => void
    ) {
        await this.init();
        const handle = await this.attach({
            onMessage: (handle, message, jsep) => {
                console.log('message', message);
                if (message.videoroom === 'attached' && jsep) {
                    console.log(
                        'Attached as subscriber and got SDP Offer! \nCreating answer...'
                    );

                    handle.createAnswer({
                        jsep: jsep,
                        tracks: [
                            { type: 'audio', capture: false },
                            { type: 'video', capture: false },
                        ],
                        success: (answer) => {
                            console.log('answrer', answer);
                            handle.send({
                                message: {
                                    request: 'start',
                                    room,
                                },
                                jsep: answer,
                                success: () => {
                                    console.log('Answer sent successfully!');
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
            onRemoteTrack: (track, mid, on) => {
                if (on) {
                    if (mid === 'audio') {
                        this.remoteAudioTrack = track;
                    } else if (mid === 'video') {
                        this.remoteVideoTrack = track;
                    }
                    if (this.remoteAudioTrack && this.remoteVideoTrack) {
                        console.log('MediaStream ready');
                        onRemoteStream &&
                            onRemoteStream(
                                new MediaStream([
                                    this.remoteAudioTrack,
                                    this.remoteVideoTrack,
                                ])
                            );
                    }
                }
            },
        });
        //await this.subscribeTo(handle, id);
        await this.join(handle, room, id, 'subscriber');
    }
}
