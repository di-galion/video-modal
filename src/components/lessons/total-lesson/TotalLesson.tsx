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
                const images = Array.isArray(item.imgUrl)
                    ? item.imgUrl
                    : [item.imgUrl];

                return (
                    <div key={index}>
                        <Switch defaultValue={false} onChange={() => {}} />
                        <div className={styles.text}>{item.title}</div>
                        <div className={styles.row}>
                            {item.imgUrl
                                ? images.map((url) => (
                                      <Image
                                          key={url}
                                          src={url}
                                          width={item.imgWidth}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
