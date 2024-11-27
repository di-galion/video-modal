export type ControlType =
    | 'level'
    | 'range'
    | 'ratios'
    | 'time'
    | 'sliding'
    | 'tips'
    | 'numberOfRows'
    | 'speed'
    | 'items'
    | 'multiSelect'
    | 'rankOfNumbers'

export interface IControlSetting {
    defaultValue?: number | number[] | string | string[];
    value?: number;
}

export interface IControlSettingItems extends IControlSetting {
    min?: number;
    max?: number;
    step?: number;
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
}
export interface IControlSettingsRankOfNumbers extends IControlSetting {
    min: number;
    max: number;
    step: number;
    values: string[];
    update?: boolean;
}

export interface IControlSettingMultiSelect extends IControlSetting {
    values: number[] | undefined;
}

export interface IControlSettingRatios extends IControlSetting {
    values: number[] | string[] | undefined;
}

export interface IControlSettingTime extends IControlSetting {
    max: number;
    min: number;
    step: number;
}

export interface IControlSettingSpeed extends IControlSetting {
    max: number;
    min: number;
    step: number;
}

export interface IControlSettingSliding extends IControlSetting {
    values: string[];
}

export interface IControlSettingTips extends IControlSetting {
    hints?: boolean;
}

interface SettingsByType extends Record<ControlType, IControlSetting> {
    level: IControlSettingLevel;
    range: IControlSettingRange;
    ratios: IControlSettingRatios;
    time: IControlSettingTime;
    tips: IControlSettingTips;
    numberOfRows: IControlSettingNumberOfRows;
    speed: IControlSettingSpeed;
    sliding: IControlSettingSliding;
    multiSelect: IControlSettingMultiSelect;
    items: IControlSettingItems;
    rankOfNumbers: IControlSettingsRankOfNumbers;
}

export type SettingsOf<T extends ControlType> = SettingsByType[T];

export interface ControlPropsOf<T extends ControlType> {
    type: T;
    title: string;
    reduxKey: string;
    settings: SettingsOf<T>;
    disabled?: boolean;
}

export type ControlProps =
    | ControlPropsOf<'level'>
    | ControlPropsOf<'range'>
    | ControlPropsOf<'ratios'>
    | ControlPropsOf<'time'>
    | ControlPropsOf<'sliding'>
    | ControlPropsOf<'speed'>
    | ControlPropsOf<'numberOfRows'>
    | ControlPropsOf<'tips'>
    | ControlPropsOf<'multiSelect'>
    | ControlPropsOf<'items'>
    | ControlPropsOf<'rankOfNumbers'>
