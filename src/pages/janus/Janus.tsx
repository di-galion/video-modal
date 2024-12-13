import { useEffect, useRef, useState } from 'react';
import Janus from 'janus-gateway';

const VideoRoom = () => {
    const [janus, setJanus] = useState<any>(null);
    const [videoroom, setVideoroom] = useState<any>(null);
    const [myId, setMyId] = useState(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        Janus.init({
            debug: 'all',
            callback: () => {
                const janusInstance = new Janus({
                    server: import.meta.env.VITE_JANUS_URL, // Замените на ваш Janus сервер
                    apisecret: 'janusrocks',
                    success: () => {
                        setJanus(janusInstance);
                        janusInstance.attach({
                            plugin: 'janus.plugin.videoroom',
                            success: (pluginHandle) => {
                                setVideoroom(pluginHandle);
                                const create = {
                                    request: 'create',
                                    room: 1234,
                                    description: 'Test Room',
                                    is_private: false,
                                };
                                pluginHandle.send({ message: create });
                            },
                            onmessage: (msg, jsep) => {
                                const event = msg['videoroom'];
                                if (event === 'created') {
                                    setMyId(msg['id']);
                                    console.log('Room created: ' + msg['id']);
                                }
                                if (event === 'joined') {
                                    console.log('Successfully joined the room');
                                    startPublishing();
                                }
                                if (jsep) {
                                    videoroom.handleRemoteJsep({ jsep: jsep });
                                }
                            },
                            onremotetrack: (track, mid) => {
                                if (track.kind === 'video') {
                                    Janus.attachMediaStream(
                                        remoteVideoRef.current,
                                        track
                                    );
                                }
                            },
                            /*onlocalstream: (stream) => {
                                Janus.attachMediaStream(localVideoRef.current, stream);
                            },*/
                            oncleanup: () => {
                                console.log('Cleanup');
                            },
                        });
                    },
                    error: (error) => {
                        console.error('Janus error:', error);
                    },
                });
            },
        });

        // Очистка при размонтировании компонента
        return () => {
            if (janus) {
                janus.destroy();
            }
        };
    }, []);

    const startPublishing = (room: number = 1234) => {
        const join = {
            request: 'join',
            room,
            ptype: 'publisher',
            display: 'My Stream',
        };
        videoroom.send({ message: join });

        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
                videoroom.createOffer({
                    media: { audioSend: true, videoSend: true },
                    success: (jsep) => {
                        const publish = { request: 'publish', jsep: jsep };
                        videoroom.send({ message: publish });
                    },
                    error: (error) => {
                        console.error('Error creating offer:', error);
                    },
                });
            })
            .catch((error) => {
                console.error('Error accessing media devices:', error);
            });
    };

    return (
        <div>
            <h1>Janus Video Room</h1>
            <video
                ref={localVideoRef}
                autoPlay
                playsInline
                style={{
                    width: '300px',
                    height: '200px',
                    border: '1px solid black',
                }}
            />
            <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                style={{
                    width: '300px',
                    height: '200px',
                    border: '1px solid black',
                }}
            />
            <button onClick={startPublishing}>Start Streaming</button>
        </div>
    );
};

export default VideoRoom;
