import { useEffect, useState } from 'react';
import { FiCamera, FiCameraOff } from 'react-icons/fi';
import { TbVolume, TbVolumeOff } from 'react-icons/tb';
import { JanusAdapter } from '../../api/janus/janus.class';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsIsReady } from '../../api/socket/useWsReady';
import { useCurrentRole } from '../../hooks/account';
import { useLessonId } from '../../hooks/lessons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { default as Janus } from '../../janus.js';
import { isTeacher } from '../../utils';
import styles from './styles.module.scss';

const jasusPublisher = new JanusAdapter();
const jasusSubscriber = new JanusAdapter();

let localAudioTrack: MediaStreamTrack;
let localVideoTrack: MediaStreamTrack;

const Video = () => {
    const [sound, setSound] = useState(true);
    const [video, setVideo] = useState(true);

    const onClickChangeSound = () => {
        muteAudio();
    };
    const onClickChangeVideo = () => {
        muteVideo();
    };

    const muteAudio = () => {
        localAudioTrack.enabled = !localAudioTrack.enabled;
        setSound(localAudioTrack.enabled);
    };

    const muteVideo = () => {
        localVideoTrack.enabled = !localVideoTrack.enabled;
        setVideo(localVideoTrack.enabled);
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

        console.log('onLocalStream', video, localVideoTrack);
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

    const userCount = useTypedSelector((state) => state.accountData.userCount);

    const isReady = useWsIsReady();

    const [teacherReady, setTeacherReady] = useState(false);

    useEffect(() => {
        if (isReady && teacherReady) {
            sendAction('janus_teacher_published', {}, false);
        }
    }, [isReady, teacherReady]);

    useEffect(() => {
        if (userCount === 1 && isTeacher(role)) {
            teacherPublish().then(() => setTeacherReady(true));
        }
    }, [userCount]);

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

    return (
        <div className={styles.video}>
            <div className={styles.video__inner}>
                <div className={styles.video__content}>
                    <div className={styles.video__mainVideoWrapper}>
                        <video
                            className={styles.video__video}
                            id="video-remote"
                            width={318}
                            height={236}
                            autoPlay
                        ></video>
                    </div>
                    <div className={styles.video__bg}></div>

                    <div className={styles.video__minVideoWrapper}>
                        <video
                            className={styles.video__video}
                            id="video-local"
                            width={127}
                            height={94}
                            autoPlay
                        ></video>
                    </div>
                </div>
                <div className={styles.video__divider}></div>
                <div className={styles.video__bottom}>
                    <div
                        onClick={onClickChangeSound}
                        className={styles.video__iconWrapper}
                    >
                        {sound ? (
                            <TbVolume className={styles.video__icon} />
                        ) : (
                            <TbVolumeOff className={styles.video__icon} />
                        )}
                    </div>
                    <div
                        onClick={onClickChangeVideo}
                        className={styles.video__iconWrapper}
                    >
                        {video ? (
                            <FiCamera className={styles.video__icon} />
                        ) : (
                            <FiCameraOff className={styles.video__icon} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
