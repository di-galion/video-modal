import { FC, useEffect, useState } from 'react';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface MultTaleRowProps {
    title: string;
    answer: number;
    maxLength: number;
    disabled?: boolean;
    index: number;
    panel: string;
}

export const MultTableRow: FC<MultTaleRowProps> = ({
    title,
    answer,
    maxLength = 2,
    disabled,
    index,
    panel,
}) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (
            !/^\d$/.test(e.key) &&
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
            name === 'multTableValue' &&
            params.index === index &&
            params.panel === panel &&
            value !== params.value
        ) {
            setValue(params.value);
        }
    });

    useEffect(() => {
        sendAction('multTableValue', { value, index, panel });
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
