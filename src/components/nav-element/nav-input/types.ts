
export enum EnumInputVariant {
    SIDEBAR = "sidebar"
}
export interface IInput {
    variant?: EnumInputVariant
    id?: string
    type: string
    label?: string | number
    size?: number
    isLabelAfter?:boolean,
    styleInput?: any
    dataAttr?: string
    classLabel?: string
}