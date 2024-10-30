import { FC } from 'react';
import { IoInformation, IoSettingsSharp } from 'react-icons/io5';
import { SettingsWrapper } from '../settings-wrapper/SettingsWrapper';
import { Button } from '../../elements/button';
import styles from './styles.module.scss';
import { SettingsButtonProps } from './Settings.module';
import { GameStatus } from '../../../typings/game.module';
import { useGameLessonMode } from '../../../hooks/lessons';
import { useMemo } from 'react';
import { useGame, useGameData, useGameStatus } from '../../../hooks/game';
import SettingInfo from '../../settings/setting-info/SettingInfo';
import { renderSettings } from '../../../utils/settings';

const TITLE_MAP: Partial<Record<GameStatus, string>> = {
    info: 'Информация',
    settings: 'Настройки',
};

const SettingsIcon: FC<{ section: GameStatus }> = ({ section }) =>
    section === 'settings' ? (
        <IoInformation color={'#ebbb31'} size={30} />
    ) : (
        <IoSettingsSharp color={'#ebbb31'} size={30} />
    );

const SettingsButton: FC<SettingsButtonProps> = ({
    onClickExit,
    onClickGo,
}) => {
    return (
        <>
            <Button onClick={onClickExit} color={'yellow'}>
                Выход
            </Button>
            <Button onClick={onClickGo} color={'yellow'}>
                Пуск
            </Button>
        </>
    );
};

export const Settings = () => {
    const [status, setStatus] = useGameStatus();
    const [, setMode] = useGameLessonMode();
    const { infoSettings = [] } = useGameData();

    const onClickChangeSection = () => {
        setStatus(status == 'info' ? 'settings' : 'info');
    };

    const onClickGo = () => {
        setStatus('start');
    };

    const onClickExit = () => {
        setMode('list');
    };

    const { gameName } = useGame();
    const { settings: controls } = useGameData();

    const contol = useMemo(() => {
        if (status === 'settings')
            return <>{controls ? renderSettings(controls) : null}</>;
        if (status === 'info')
            return infoSettings.map((item) => (
                <SettingInfo key={item.title} {...item} />
            ));
        return null;
    }, [status, gameName, controls]);

    return (
        <SettingsWrapper>
            <div className={styles.wrapper}>
                <div className={styles.settings}>
                    <div className={styles.titleWrapper}>
                        <p className={styles.title}>{TITLE_MAP[status]}</p>
                        <button
                            onClick={onClickChangeSection}
                            className={styles.titleBtn}
                        >
                            <span>
                                <SettingsIcon section={status} />
                            </span>
                        </button>
                    </div>
                    <div
                        className={
                            status === 'settings'
                                ? styles.settingsList
                                : styles.infoList
                        }
                    >
                        {contol}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <SettingsButton
                        onClickExit={onClickExit}
                        onClickGo={onClickGo}
                    />
                </div>
            </div>
        </SettingsWrapper>
    );
};
