export type ControlType =
    | 'level'
    | 'range'
    | 'ratios'
    | 'time'
    | 'sliding'
    | 'speed';

export interface IControlSetting {
    defaultValue?: number;
    value?: number;
}

export interface IControlSettingLevel extends IControlSetting {
    max: number;
    min: number;
    step: number;
    variant: string;
}

export interface IControlSettingRange extends IControlSetting {
    update?: boolean;
    max: number;
    min: number;
    step: number;
    variant: string;
}

export interface IControlSettingRatios extends IControlSetting {
    values: number[] | undefined;
}

export interface IControlSettingTime extends IControlSetting {
    max: number;
    min: number;
    step: number;
    update?: boolean;
}

export interface IControlSettingSpeed extends IControlSetting {
    max: number;
    min: number;
    step: number;
    update?: boolean;
}

export interface IControlSettingSliding extends IControlSetting {
    values: string[];
    update?: boolean;
}

interface SettingsByType extends Record<ControlType, IControlSetting> {
    level: IControlSettingLevel;
    range: IControlSettingRange;
    ratios: IControlSettingRatios;
    time: IControlSettingTime;
    sliding: IControlSettingSliding;
    speed: IControlSettingSpeed;
}

export type SettingsOf<T extends ControlType> = SettingsByType[T];

export interface ControlPropsOf<T extends ControlType> {
    type: T;
    title: string;
    reduxKey: string;
    settings: SettingsOf<T>;
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
