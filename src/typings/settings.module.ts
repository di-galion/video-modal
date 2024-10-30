export type ControlType =
    | 'level'
    | 'range'
    | 'ratios'
    | 'time'
    | 'sliding'
    | 'tips'
    | 'numberOfRows'
    | 'speed'
    | 'items';

export interface IControlSetting {
    defaultValue?: number;
    value?: number;
}

export interface IControlSettingItems extends IControlSetting {
    min?: number;
    max?: number;
    step?: number;
    defaultValue: number;
}

export interface IControlSettingLevel extends IControlSetting {
    max: number;
    min: number;
    step: number;
    variant?: string;
}

export interface IControlSettingRange extends IControlSetting {
    update?: boolean;
    max: number;
    min: number;
    step: number;
    variant?: string;
}

export interface IControlSettingNumberOfRows extends IControlSetting {
    max: number;
    min: number;
    step: number;
    update?: boolean;
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

export interface IControlSettingTips extends IControlSetting {
    tips: boolean;
}

interface SettingsByType extends Record<ControlType, IControlSetting> {
    level: IControlSettingLevel;
    range: IControlSettingRange;
    ratios: IControlSettingRatios;
    time: IControlSettingTime;
    tips: IControlSettingTips;
    numberOfRows: IControlSettingNumberOfRows;
    speed: IControlSettingSpeed;
    items: IControlSettingItems;
    sliding: IControlSettingSliding;
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
    | ControlPropsOf<'speed'>
    | ControlPropsOf<'numberOfRows'>
    | ControlPropsOf<'tips'>;
