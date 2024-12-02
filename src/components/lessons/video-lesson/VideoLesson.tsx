import { useCurrentLesson } from '../../../hooks/lessons';
import { IVideoLesson } from '../../../typings/lesson.module';
import { Video } from '../../elements/video/Video';

export const VideoLesson = () => {
    const [lesson] = useCurrentLesson();
    const { url } = lesson as IVideoLesson;

    return <Video url={url} width={800} controls />;
};
