export type ControlType =
    | 'level'
    | 'range'
    | 'ratios'
    | 'time'
    | 'sliding'
    | 'speed';

export interface IGameDataSettings {
    defaultValue?: number;
    value?: number;
}

export interface IGameDataSettingsLevel extends IGameDataSettings {
    max: number;
    min: number;
    step: number;
    variant: string;
}

export interface IGameDataSettingsRange extends IGameDataSettings {
    update?: boolean;
    max: number;
    min: number;
    step: number;
    variant: string;
}

export interface IGameDataSettingsRatios extends IGameDataSettings {
    values: number[] | string[] | undefined;
}

export interface IGameDataSettingsTime extends IGameDataSettings {
    max: number;
    min: number;
    step: number;
    update?: boolean;
}

export interface IGameDataSettingsSpeed extends IGameDataSettings {
    max: number;
    min: number;
    step: number;
    update?: boolean;
}

export interface IGameDataSettingsSliding extends IGameDataSettings {
    values: string[];
    update?: boolean;
}

interface EnumSettingsByType extends Record<ControlType, IGameDataSettings> {
    level: IGameDataSettingsLevel;
    range: IGameDataSettingsRange;
    ratios: IGameDataSettingsRatios;
    time: IGameDataSettingsTime;
    sliding: IGameDataSettingsSliding;
    speed: IGameDataSettingsSpeed;
}

export type ISettingsOf<T extends ControlType> = EnumSettingsByType[T];

export interface ControlPropsOf<T extends ControlType> {
    type: T;
    title: string;
    reduxKey: string;
    settings: ISettingsOf<T>;
    disabled?: boolean;
    defaultValue?: number;
    value?: number;
}

export type ControlProps =
    | ControlPropsOf<'level'>
    | ControlPropsOf<'range'>
    | ControlPropsOf<'ratios'>
    | ControlPropsOf<'time'>
    | ControlPropsOf<'sliding'>
    | ControlPropsOf<'speed'>;
