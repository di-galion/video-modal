import { FC } from 'react';
import { ControlPropsOf } from '../../../typings/settings.module.ts';
import { useValue } from '../../../hooks/game';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper.tsx';
import styles from './styles.module.scss';

type ThemeSelectorProps = ControlPropsOf<'theme'>;

const SettingTheme: FC<ThemeSelectorProps> = ({
    title,
    settings = { defaultValue: 'Просто' },
    reduxKey,
    disabled,
}) => {
    const [theme, setTheme] = useValue<string>(
        reduxKey,
        (settings.defaultValue as string) || 'Просто'
    );

    const themeOptions = [
        'Просто',
        'Братья',
        'Друзья',
        'Переход',
        'Друзья и Братья',
        'Анзан',
    ];

    const handleThemeChange = (value: string) => {
        if (!disabled) {
            setTheme(value);
        }
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.container}>
                <div className={styles.dropdown}>
                    <select
                        id="theme-select"
                        className={styles.select}
                        value={theme}
                        onChange={(e) => handleThemeChange(e.target.value)}
                        disabled={disabled}
                    >
                        {themeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </SettingsWrapper>
    );
};

export default SettingTheme;
