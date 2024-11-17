import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import classNames from 'classnames';

export const Notification = () => {
    const timeout = useRef<NodeJS.Timeout>();
    const { show, text, type } = useTypedSelector(
        (state) => state.accountData.notification
    );
    const { hideNotification } = useActions();

    useEffect(() => {
        clearTimeout(timeout.current);
        if (show) {
            timeout.current = setTimeout(() => hideNotification(), 2500);
        }
    }, [show]);

    return show ? (
        <div
            className={classNames(styles.notification, {
                [styles.error]: type === 'error',
                [styles.success]: type === 'success',
            })}
        >
            {text}
        </div>
    ) : null;
};
