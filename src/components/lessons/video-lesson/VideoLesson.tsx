import { useEffect, useState } from 'react';
import { useCurrentLesson } from '../../../hooks/lessons';
import { IVideoLesson } from '../../../typings/lesson.module';
import { Video } from '../../elements/video/Video';

export const VideoLesson = () => {
    const [lesson] = useCurrentLesson();
    const { url } = lesson as IVideoLesson;
    const [src, setSrc] = useState('');

    useEffect(() => {
        if (typeof url === 'string') {
            setSrc(url);
        } else {
            url.then((res) => setSrc(res as string));
        }
    }, []);

    return src ? <Video src={src} width={800} controls /> : 'Загрузка...';
};
