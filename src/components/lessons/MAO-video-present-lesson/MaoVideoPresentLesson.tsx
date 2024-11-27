import { createPath } from '../../../utils/createPath';
import { Video } from '../../elements/video/Video';

export const MaoVideoPresentLesson = () => {
    return (
        <Video src={createPath('/assets/video/720.mp4')} width={800} controls />
    );
};
