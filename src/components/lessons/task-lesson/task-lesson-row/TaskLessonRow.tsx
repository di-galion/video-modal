import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useWebSocket, useWsAction } from '../../../../api/socket/useWebSocket';

interface TaskLessonRowProps {
    title: string;
    answer: number;
    maxLength: number;
    disabled?: boolean;
    index: number;
    panel: string;
}

export const TaskLessonRow: FC<TaskLessonRowProps> = ({
    title,
    answer,
    maxLength = 2,
    disabled,
    index,
    panel,
}) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (
            (e.keyCode < 48 || e.keyCode > 58) &&
            e.key !== 'Backspace' &&
            e.key !== 'Delete'
        ) {
            e.preventDefault();
        }
    };

    const [value, setValue] = useState('');
    const { sendAction } = useWebSocket();

    useWsAction((name, params = {}) => {
        if (
            name === 'value' &&
            params.index === index &&
            params.panel === panel &&
            value !== params.value
        ) {
            setValue(params.value);
        }
    });

    useEffect(() => {
        sendAction('value', { value, index, panel });
    }, [value]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const text = title
        .split('')
        .map((symbol) => <span className={styles.symbol}>{symbol}</span>);

    return (
        <p className={styles.row}>
            {text}
            <input
                type="text"
                className={classNames(styles.input, {
                    [styles.input__right]: answer === Number(value),
                    [styles.input__wrong]:
                        answer !== Number(value) && value !== '',
                })}
                maxLength={maxLength}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={value}
                disabled={disabled}
            />
        </p>
    );
};
