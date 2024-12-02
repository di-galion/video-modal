import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';

type IVideoLessonPromiseFunc = () => Promise<string | undefined>;

export const Video: FC<
    React.VideoHTMLAttributes<HTMLVideoElement> & {
        url?: string | IVideoLessonPromiseFunc;
    }
> = ({ url, ...props }) => {
    const [src, setSrc] = useState('');

    useEffect(() => {
        if (url) {
            if (typeof url === 'string') {
                setSrc(url);
            } else {
                url().then((res) => {
                    setSrc(res as string);
                });
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
