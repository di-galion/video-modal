import { FC } from 'react';
import styles from './styles.module.scss';

interface GermProps {
    index: number | null;
}

export const Germ: FC<GermProps> = ({ index }) => {
    return <div className={styles.germ} data-num={index}></div>;
};
