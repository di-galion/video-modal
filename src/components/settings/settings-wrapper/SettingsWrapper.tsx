import classNames from 'classnames';
import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';

interface SettingsWrapperProps extends PropsWithChildren {
    title: string;
    disabled?: boolean;
    variant?: string;
}

const SettingsWrapper: FC<SettingsWrapperProps> = ({
    children,
    title,
    disabled,
    variant = 'settings',
}) => {
    return (
        <div
            className={classNames('', {
                [styles.wrapper]: variant === 'settings',
                [styles.wrapperInfo]: variant === 'info',
                [styles.wrapper_disabled]: disabled,
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
