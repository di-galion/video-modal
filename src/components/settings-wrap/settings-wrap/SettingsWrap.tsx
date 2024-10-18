import { FC, PropsWithChildren, useState } from 'react';
import { IoInformation, IoSettingsSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import styles from './styles.module.scss';
import { SettingsWrapper } from '../../game-wrapper/settings-wrapper/SettingsWrapper';
import { Button } from '../../elements/button';

enum EnumSections {
    INFO = 'info',
    SETTINGS = 'settings',
}

export const SettingsWrap: FC<PropsWithChildren> = ({ children }) => {
    const { status } = useTypedSelector((state) => state.gameData);
    const params = useParams();

    const navigate = useNavigate();
    const { setPageStatus, setGameName } = useActions();
    const [section, setSection] = useState(EnumSections.SETTINGS);

    const onClickChangeSection = () => {
        setSection(
            section == EnumSections.INFO
                ? EnumSections.SETTINGS
                : EnumSections.INFO
        );
    };
    const onClickGo = () => {
        setPageStatus('start');
    };
    const onClickExit = () => {
        navigate('/');
    };
    /*const onClickGoToSettings = () => {
        setPageStatus('settings');
    };*/

    /*useEffect(() => {
        console.log(params);
        setGameName(params.game);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);*/

    return (
        <SettingsWrapper>
            <div className={styles.wrapper}>
                {status === 'settings' && (
                    <>
                        <div className={styles.settings}>
                            <div className={styles.titleWrapper}>
                                <p className={styles.title}>
                                    {section === EnumSections.INFO
                                        ? 'Информация'
                                        : 'Настройки'}
                                </p>
                                <button
                                    onClick={onClickChangeSection}
                                    className={styles.titleBtn}
                                >
                                    <span>
                                        {section === EnumSections.SETTINGS ? (
                                            <IoInformation
                                                color={'#ebbb31'}
                                                size={30}
                                            />
                                        ) : (
                                            <IoSettingsSharp
                                                color={'#ebbb31'}
                                                size={30}
                                            />
                                        )}
                                    </span>
                                </button>
                            </div>
                            <div className={styles.settingsList}>
                                {children}
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            {status === 'settings' && (
                                <>
                                    <Button
                                        onClick={onClickExit}
                                        color={'yellow'}
                                    >
                                        Выход
                                    </Button>
                                    <Button
                                        onClick={onClickGo}
                                        color={'yellow'}
                                    >
                                        Пуск
                                    </Button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </SettingsWrapper>
    );
};
