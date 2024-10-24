import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const SignsLessonWrap: FC<
    PropsWithChildren<{ collapse: boolean; imgSrc: string }>
> = ({ collapse, imgSrc }) => {
    return (
        <div
            className={classNames(styles.content, {
                [styles.collapse]: collapse,
            })}
        >
            <div className={styles.content__box}>
                <div className={styles.content__wrap}>
                    <div>
                        <div className={styles.content__container}>
                            <div className={styles.content__component_wrapper}>
                                <img className={styles.img} src={imgSrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
