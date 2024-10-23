import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface TaskLessonRowProps {
    title: string;
    answer: number;
    maxLength: number;
    disabled?: boolean;
}

export const TaskLessonRow: FC<TaskLessonRowProps> = ({
    title,
    answer,
    maxLength = 2,
    disabled,
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
