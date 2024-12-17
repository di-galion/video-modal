import { JanusAdapter } from '../../api/janus/janus.class';
import { VideoRoom } from './VideoRoom';

const jasusPublisher = new JanusAdapter();
const jasusSubscriber = new JanusAdapter();

let localStream: MediaStream;

export const JanusPage = () => {
    /*const [room, setRoom] = useState('100');

    const muteAudio = () => {
        for (let i = 0; i < localStream.getAudioTracks().length; i++) {
            localStream.getAudioTracks()[i].enabled = false;
        }
    };

    const unmuteAudio = () => {
        for (let i = 0; i < localStream.getAudioTracks().length; i++) {
            localStream.getAudioTracks()[i].enabled = true;
        }
    };

    const onLocalStream = (stream: MediaStream) => {
        const video = document.querySelector(
            '#video-local'
        ) as HTMLVideoElement;

        localStream = stream;

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

    const { sendAction } = useWebSocket();

    const teacherPublish = async () => {
        return await jasusPublisher.publish(1, Number(room), onLocalStream);
    };

    const teacherSubscribe = async () => {
        return await jasusSubscriber.subscribe(2, Number(room), onRemoteStream);
    };

    useWsAction((name) => {
        switch (name) {
            case 'janus_teacher_published':
                studentSubscribe()
                    .then(() => studentPublish())
                    .then(() => {
                        sendAction('janus_student_published', {}, false);
                    });
                break;
            case 'janus_student_published':
                teacherSubscribe();
                break;
        }
    });

    const studentPublish = async () => {
        return await jasusPublisher.publish(
            2,
            Number(room),
            onLocalStream,
            false
        );
    };

    const studentSubscribe = async () => {
        return await jasusSubscriber.subscribe(1, Number(room), onRemoteStream);
    };

    const role = useCurrentRole();

    //const isWsReady = useWsIsReady();

    useWsOnReady(() => {
        if (isTeacher(role)) {
            teacherPublish().then(() =>
                sendAction('janus_teacher_published', {}, false)
            );
        }
    });

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
                <button onClick={teacherPublish}>Teacher publish</button>
                <button onClick={teacherSubscribe}>Teacher subscribe</button>
                <br />
                <button onClick={studentPublish}>Student publish</button>
                <button onClick={studentSubscribe}>Student subscribe</button>
                <br />
                <button onClick={muteAudio}>mute audio</button>
                <br />
                <button onClick={unmuteAudio}>unmute audio</button>
                <br />
                <input value={room} onChange={(e) => setRoom(e.target.value)} />
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
    );*/

    return <VideoRoom />;
};
