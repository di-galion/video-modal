import { JanusAdapter } from '../../api/janus/janus.class';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsOnReady } from '../../api/socket/useWsReady';
import { useCurrentRole } from '../../hooks/account';
import { useLessonId } from '../../hooks/lessons';
import * as Janus from '../../janus';
import { isTeacher } from '../../utils';

const jasusPublisher = new JanusAdapter();
const jasusSubscriber = new JanusAdapter();

let localAudioTrack: MediaStreamTrack;
let localVideoTrack: MediaStreamTrack;

export const VideoRoom = () => {
    const muteAudio = () => {
        localAudioTrack.enabled = !localAudioTrack.enabled;
    };

    const muteVideo = () => {
        localVideoTrack.enabled = !localVideoTrack.enabled;
    };

    const onLocalStream = (
        videoTrack: MediaStreamTrack,
        audioTrack: MediaStreamTrack
    ) => {
        const video = document.querySelector(
            '#video-local'
        ) as HTMLVideoElement;

        localVideoTrack = videoTrack;
        localAudioTrack = audioTrack;

        Janus.attachMediaStream(video, new MediaStream([localVideoTrack]));

        console.log('onLocalStream');
    };

    const onRemoteStream = (stream: MediaStream) => {
        const video = document.querySelector(
            '#video-remote'
        ) as HTMLVideoElement;

        Janus.attachMediaStream(video, stream);

        console.log('onRemoteStream', stream, video);
    };

    const { sendAction } = useWebSocket();

    const room = useLessonId();

    const teacherPublish = async () => {
        return await jasusPublisher.publish(1, room, onLocalStream);
    };

    const teacherSubscribe = async () => {
        return await jasusSubscriber.subscribe(2, room, onRemoteStream);
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
        return await jasusPublisher.publish(2, room, onLocalStream, false);
    };

    const studentSubscribe = async () => {
        return await jasusSubscriber.subscribe(1, room, onRemoteStream);
    };

    const role = useCurrentRole();

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
                <button onClick={muteAudio}>mute audio</button>
                <br />
                <button onClick={muteVideo}>unmute audio</button>
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
