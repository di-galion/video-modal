import { FC } from 'react';
import { IoInformation, IoSettingsSharp } from 'react-icons/io5';
import { SettingsWrapper } from '../settings-wrapper/SettingsWrapper';
import { Button } from '../../elements/button';
import styles from './styles.module.scss';
import { SettingsButtonProps } from './Settings.module';
import { GameStatus } from '../../../store/game-data/GameData.module';
import { useGameLessonMode } from '../../../hooks/lessons';
import { useMemo } from 'react';
import { INFO_SETTINGS } from '../../../constants/game.contants';
import { useGame, useGameSettings, useGameStatus } from '../../../hooks/game';
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
    const settings = useGameSettings();

    const contol = useMemo(() => {
        if (status === 'settings')
            return <>{renderSettings(gameName, settings)}</>;
        if (status === 'info')
            return INFO_SETTINGS(gameName).map((item) => (
                <SettingInfo {...item} />
            ));
        return null;
    }, [status, gameName, settings]);

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
