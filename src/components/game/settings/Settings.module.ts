export enum EnumSections {
    INFO = 'info',
    SETTINGS = 'settings',
}

export interface SettingsButtonProps {
    onClickExit: () => void;
    onClickGo: () => void;
}
