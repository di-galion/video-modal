import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import api, { CloudType } from '../../../api/http/api';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';

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
        if (name === 'playVideo' && params.src === src) {
            setAutoPlay(true);
        }
    });

    const { sendAction } = useWebSocket();

    return (
        <div className={styles.videoWrapper}>
            {src ? (
                <video
                    {...props}
                    autoPlay={autoPlay}
                    onPlay={() => sendAction('playVideo', { src }, false)}
                    src={src}
                    className={styles.videoWrapper__video}
                />
            ) : (
                'Загрузка...'
            )}
        </div>
    );
};
