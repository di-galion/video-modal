import { Image } from '../../elements/image/Image';
import { ITotalLesson } from '../../../typings/lesson.module';
import Switch from '../../switch/Switch';
import { useCurrentLesson } from '../../../hooks/lessons';
import styles from './styles.module.scss';

export const TotalLesson = () => {
    const [lesson] = useCurrentLesson();
    const { items } = lesson as ITotalLesson;

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <Switch defaultValue={false} onChange={() => {}} />
                        <div className={styles.text}>{item.title}</div>
                        <Image src={item.imgUrl} width={item.imgWidth} />
                    </div>
                );
            })}
        </>
    );
};
