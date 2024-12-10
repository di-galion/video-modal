import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import api, { CloudType } from '../../../api/http/api';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import { isTeacher } from '../../../utils';
import { useCurrentRole } from '../../../hooks/account';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

export const Video: FC<
    React.VideoHTMLAttributes<HTMLVideoElement> & {
        url?: string | [CloudType, string];
    }
> = ({ url, ...props }) => {
    const [src, setSrc] = useState('');
    const [autoPlay, setAutoPlay] = useState(false);

    useEffect(() => {
        if (url) {
            if (typeof url === 'string') {
                setSrc(url);
            } else {
                api.getCloudVideoUrl(url[0], url[1]).then((res) =>
                    setSrc(res as string)
                );
            }
        } else {
            setSrc(props.src!);
        }
    }, [url]);

    useWsAction((name, params = {}) => {
        if (name === 'playVideo') {
            const src1 = params.src.split('?')[0];
            const src2 = src.split('?')[0];
            if (src1 === src2) {
                console.log('autoplay');
                setAutoPlay(true);
            }
        }
    });

    const { sendAction } = useWebSocket();

    const settings = useTypedSelector((state) => state.settingsData);

    const role = useCurrentRole();

    const handlePlay = () => {
        if (isTeacher(role) || settings.video) {
            sendAction('playVideo', { src }, false);
        }
    };

    return (
        <div className={styles.videoWrapper}>
            {src ? (
                <video
                    {...props}
                    autoPlay={autoPlay}
                    onPlay={handlePlay}
                    src={src}
                    className={styles.videoWrapper__video}
                />
            ) : (
                'Загрузка...'
            )}
        </div>
    );
};
