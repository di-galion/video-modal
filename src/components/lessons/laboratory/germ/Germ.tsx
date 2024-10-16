import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { random } from '../../../../utils';
import classNames from 'classnames';

interface GermProps {
    index: number | null;
}

export const Germ: FC<GermProps> = ({ index }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    const animation = () => {
        if (isAnimated) {
            setIsAnimated(false);
        }
        if (!random(0, 7)) {
            setIsAnimated(true);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            animation();
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [index]);

    return (
        <div
            className={classNames(styles.germ, {
                [styles.anim]: isAnimated,
            })}
            data-num={index}
        ></div>
    );
};
