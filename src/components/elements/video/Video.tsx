import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import api, { CloudType } from '../../../api/http/api';

export const Video: FC<
    React.VideoHTMLAttributes<HTMLVideoElement> & {
        url?: string | [CloudType, string];
    }
> = ({ url, ...props }) => {
    const [src, setSrc] = useState('');

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

    return (
        <div className={styles.videoWrapper}>
            {src ? (
                <video
                    {...props}
                    src={src}
                    className={styles.videoWrapper__video}
                />
            ) : (
                'Загрузка...'
            )}
        </div>
    );
};
