import { FC, PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';

export const Panel: FC<
    PropsWithChildren<{
        height?: number;
        width: number;
        collapse?: boolean;
        title: string;
        name: string;
    }>
> = ({ collapse = false, title, children, height, name }) => {
    const { sendAction } = useWebSocket();

    const [collapsed, setCollapsed] = useState(collapse);

    useWsAction((actionName, params = {}) => {
        if (actionName === 'collapse' && params.name === name) {
            setCollapsed(params.collapse);
        }
    });

    const handleCollapse = (name: string, collapse: boolean) => {
        sendAction('collapse', { name, collapse });
    };

    return (
        <>
            <div
                className={styles.collapse__header}
                onClick={() => handleCollapse(name, !collapsed)}
            >
                <div className={styles.expand__icon}>
                    <i className={classNames({ [styles.rotate]: collapsed })}>
                        <svg width="16" height="11" fill="none">
                            <path
                                d="M3 .3h10a2 2 0 011.8 1.2 2.5 2.5 0 01-.3 2.6l-5 6a2 2 0 01-3 0l-5-6a2.4 2.4 0 01-.3-2.6A2 2 0 013.1.3z"
                                fill="#000"
                            ></path>
                        </svg>
                    </i>
                </div>
                <span className={styles.collapse__text}>
                    <span className={styles.collapse__title}>{title}</span>
                </span>
            </div>
            <div
                style={{ maxHeight: height }}
                className={classNames(styles.child, {
                    [styles.collapse]: collapsed,
                })}
            >
                {children}
            </div>
        </>
    );
};
