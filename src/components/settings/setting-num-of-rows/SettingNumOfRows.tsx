import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ControlPropsOf } from '../../../typings/settings.module';
import { useValue } from '../../../hooks/game';

interface SettingsNumOfRowsProps extends ControlPropsOf<'numberOfRows'> {
    title: string;
}

const SettingsNumOfRows: FC<SettingsNumOfRowsProps> = ({
    title,
    settings = {
        min: 1,
        max: 9,
        step: 1,
        defaultValue: 1,
    },
    reduxKey,
    disabled,
}) => {
    const [value, setValue] = useValue(
        reduxKey,
        (settings.defaultValue as number) || settings.min
    );

    const onPrevClick = () => {
        if (value > settings.min) {
            setValue(value - settings.step);
        }
    };

    const onNextClick = () => {
        if (value < settings.max) {
            setValue(value + settings.step);
        }
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.input}>
                    <span className={styles.input__time}>{value}</span>
                    <div className={styles.icons}>
                        <button
                            className={classNames(styles.icon, {
                                [styles.icon_disabled]: value === settings.max,
                            })}
                            onClick={onNextClick}
                        />
                        <hr />
                        <button
                            className={classNames(styles.icon_down, {
                                [styles.icon_down_disabled]:
                                    value === settings.min,
                            })}
                            onClick={onPrevClick}
                        />
                    </div>
                </div>
            </div>
        </SettingsWrapper>
    );
};

export default SettingsNumOfRows;
