import classNames from 'classnames';
import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';

interface SettingsWrapperProps extends PropsWithChildren {
    title: string;
    disabled?: boolean;
    variant?: string;
    fullRow?: boolean;
}

const SettingsWrapper: FC<SettingsWrapperProps> = ({
    children,
    title,
    disabled,
    fullRow,
    variant = 'settings',
}) => {
    return (
        <div
            className={classNames('', {
                [styles.wrapper]: variant === 'settings',
                [styles.wrapperInfo]: variant === 'info',
                [styles.wrapper_disabled]: disabled,
                [styles.fullRow]: fullRow,
            })}
        >
            <div className={styles.title}>{title}</div>
            <div
                className={classNames('', {
                    [styles.inner]: variant === 'settings',
                    [styles.innerInfo]: variant === 'info',
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default SettingsWrapper;
