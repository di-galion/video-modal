import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import styles from './styles.module.scss';

interface SettingInfoProps {
    title: string;
    texts: string[];
}
const SettingInfo: FC<SettingInfoProps> = ({ title, texts = [] }) => {
    return (
        <SettingsWrapper variant={'info'} title={title}>
            <div className={styles.wrapper}>
                {texts.map((text) => {
                    if (!text) {
                        return <div className={styles.text}></div>;
                    }
                    return <div>{text}</div>;
                })}
            </div>
        </SettingsWrapper>
    );
};

export default SettingInfo;
