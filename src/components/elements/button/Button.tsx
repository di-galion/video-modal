import classNames from 'classnames';
import React, { CSSProperties, ForwardedRef, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
    link?: string;
    color?: 'blue' | 'grey' | 'yellow';
    navLink?: string;
    disabled?: boolean;
    open?: string;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}>;

export const Button = React.forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLDivElement>) => {
        const navigate = useNavigate();
        const { style, color = 'blue', children, disabled = false } = props;

        /*const navLinkClick = useCallback(
            () => window.history.push(props.navLink),
            [history]
        );*/

        const onClick = () => {
            if (disabled) {
                return null;
            }

            if (props.open) {
                window.open(props.open);
            }

            if (props.link) {
                navigate(props.link);
            }

            /*if (props.navLink) {
                navLinkClick();
            }*/

            if (typeof props.onClick == 'function') {
                props.onClick();
            }

            return null;
        };

        return (
            <div
                className={classNames(
                    styles.button,
                    styles[color],
                    props.className,
                    disabled && styles.disabled
                )}
                ref={ref}
                style={{ ...style }}
                onClick={onClick}
            >
                {children}
            </div>
        );
    }
);
