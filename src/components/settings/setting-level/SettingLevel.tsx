import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import SliderCustom from '../slider/Slider';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

type SettingsProps = ControlPropsOf<'level'>;

export const SettingLevel: FC<SettingsProps> = ({
    title,
    settings = { defaultValue: 1 },
    reduxKey,
    disabled,
}) => {
    const [value, setValue] = useValue(reduxKey, settings.defaultValue || 1);

    const onChangeHandler = (v: number) => {
        setValue(v);
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.level}>
                    {<Levels level={Number(value)} />}
                </div>
                <SliderCustom
                    {...settings}
                    value={value as number}
                    onChange={onChangeHandler}
                />
            </div>{' '}
        </SettingsWrapper>
    );
};

type LevelProps = {
    level?: number;
};

const Levels: FC<LevelProps> = ({ level }) => {
    if (level == 1) {
        return (
            <svg
                viewBox="0 0 444 119"
                width="100%"
                height="119"
                className={styles.icon}
            >
                <defs>
                    <linearGradient
                        id="prefix__a"
                        x1="221.66"
                        y1="117.78"
                        x2="221.66"
                        y2="1.43"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.06" stopColor="#ede4cb"></stop>
                        <stop offset="0.32" stopColor="#f0e9d4"></stop>
                        <stop offset="0.75" stopColor="#f9f6ee"></stop>
                        <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M424.47 117.78H18.85a17.42 17.42 0 01-17.42-17.42V74A17.41 17.41 0 0116.5 56.75L422.12 1.59a17.42 17.42 0 0119.77 17.26v81.51a17.42 17.42 0 01-17.42 17.42z"
                    stroke="#5d2816"
                    strokeMiterlimit="10"
                    strokeWidth="2.85"
                    fill="url(#prefix__a)"
                ></path>
            </svg>
        );
    }
    if (level === 2) {
        return (
            <svg
                viewBox="0 0 444 119"
                width="100%"
                height="119"
                className={styles.icon}
            >
                <defs>
                    <linearGradient
                        id="prefix__1"
                        x1="221.67"
                        y1="117.79"
                        x2="221.67"
                        y2="1.44"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.06" stopColor="#d5652c"></stop>
                        <stop offset="0.15" stopColor="#d76c35"></stop>
                        <stop offset="0.3" stopColor="#dc7e4f"></stop>
                        <stop offset="0.5" stopColor="#e49d78"></stop>
                        <stop offset="0.73" stopColor="#f0c7b2"></stop>
                        <stop offset="0.99" stopColor="#fefcfb"></stop>
                        <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M424.47 117.78H18.85a17.42 17.42 0 01-17.42-17.42V74A17.41 17.41 0 0116.5 56.75L422.12 1.59a17.42 17.42 0 0119.77 17.26v81.51a17.42 17.42 0 01-17.42 17.42z"
                    stroke="#5d2816"
                    strokeMiterlimit="10"
                    stroke-width="2.85"
                    fill="url(#prefix__1)"
                ></path>
            </svg>
        );
    }
};
