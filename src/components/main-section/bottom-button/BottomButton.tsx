import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './styles.module.scss';

export const BottomButton: FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => {
    return (
        <button
            {...props}
            className={classNames(styles.bottom__button, className)}
        >
            {children}
        </button>
    );
};
