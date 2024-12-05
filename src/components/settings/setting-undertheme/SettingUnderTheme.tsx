import { FC, useEffect, useState } from 'react';
import { ControlPropsOf } from '../../../typings/settings.module.ts';
import { useGameSettings } from '../../../hooks/game.ts';
import { useValue } from '../../../hooks/game';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper.tsx';
import styles from './styles.module.scss';

type SubThemeSelectorProps = ControlPropsOf<'underTheme'>;

const SettingUnderTheme: FC<SubThemeSelectorProps> = ({
                                                          title,
                                                          settings = { defaultValue: '' },
                                                          reduxKey,
                                                          disabled,
                                                      }) => {
    const gameSettings = useGameSettings();
    const theme = gameSettings.theme; // Получаем текущую тему из Redux
    const [subThemes, setSubThemes] = useState<(number | string)[]>([]);
    const [selectedSubTheme, setSelectedSubTheme] = useValue<number | string>(
        reduxKey,
        settings.defaultValue || ''
    );

    const themeOptions = [
        { label: 'Просто', value: [4, 5, 6, 7, 8, 9, 10, 19, 100] },
        { label: 'Братья', value: [1, 2, 3, 4] },
        { label: 'Друзья', value: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
        { label: 'Переход', value: [50, 100] },
        { label: 'Друзья и Братья', value: [9, 8, 7, 6] },
        { label: 'Анзан', value: ['Сложение', 'Вычитание', 'Случайно'] },
    ];

    useEffect(() => {
        const selectedTheme = themeOptions.find((opt) => opt.label === theme);
        const subThemeValues = selectedTheme?.value || [];
        setSubThemes(subThemeValues);

        if (!subThemeValues.includes(selectedSubTheme)) {
            setSelectedSubTheme(subThemeValues[0] || settings.defaultValue);
        }
    }, [theme, selectedSubTheme]);

    const handleSubThemeChange = (value: string | number) => {
        if (!disabled) {
            setSelectedSubTheme(value);
        }
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <select
                className={styles.select}
                value={selectedSubTheme}
                onChange={(e) =>
                    handleSubThemeChange(
                        isNaN(Number(e.target.value))
                            ? e.target.value
                            : Number(e.target.value)
                    )
                }
                disabled={disabled}
            >
                {subThemes.map((subTheme, index) => (
                    <option key={index} value={subTheme}>
                        {subTheme}
                    </option>
                ))}
            </select>
        </SettingsWrapper>
    );
};

export default SettingUnderTheme;