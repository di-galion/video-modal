import { useCurrentLesson } from '../../../hooks/lessons';
import { IImageLesson } from '../../../typings/lesson.module';
import { Image } from '../../elements/image/Image';

export const ImageLesson = () => {
    const [lesson] = useCurrentLesson();
    const { url } = lesson as IImageLesson;
    return <Image src={url} width={800} />;
};

export default ImageLesson;
