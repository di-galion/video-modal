import { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ILesson } from '../../../constants/lessons.constants';

interface PanelItemProps {
    onItemClick: (index: number) => void;
    index: number;
    current: number;
    item: ILesson;
}

export const PanelItem: FC<PanelItemProps> = ({
    onItemClick,
    index,
    current,
    item,
}) => {
    return (
        <div
            className={styles.link}
            onClick={() => onItemClick(index)}
            key={index}
        >
            <p
                className={classNames(styles.item, {
                    [styles.item_active]: current === index,
                })}
            >
                <span
                    className={classNames(styles.item__text, {
                        [styles.item__text_active]: current === index,
                    })}
                >
                    {item.title}
                </span>
                {item.status && (
                    <span
                        className={classNames(styles.item__side, {
                            [styles.item__side_bad]: item.bad,
                        })}
                    ></span>
                )}
            </p>
        </div>
    );
};
