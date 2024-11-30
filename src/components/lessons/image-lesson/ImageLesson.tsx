import { useCurrentLesson } from '../../../hooks/lessons';
import { IImageLesson } from '../../../typings/lesson.module';
import { Image } from '../../elements/image/Image';
import styles from './styles.module.scss';

export const ImageLesson = () => {
    const [lesson] = useCurrentLesson();
    const { url } = lesson as IImageLesson;
    return <Image src={url} className={styles.img} />;
};
