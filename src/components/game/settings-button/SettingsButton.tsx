import { MdOutlineSettings } from 'react-icons/md';
import { FC } from 'react';
import styles from './styles.module.scss';

const Icon = () => (
    <span>
        <MdOutlineSettings data-settings color="rgba(0, 0, 0, 0.65)" />
    </span>
);

export const SettingsButton: FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = (
    props
) => (
    <button className={styles.button} {...props}>
        <Icon />
        <span>Настройки</span>
        <Icon />
    </button>
);
