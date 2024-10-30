import styles from '../start/Start.module.scss';
import Table from '../table/Table.tsx';
import {
    useGameData,
    useGameSettings,
    useGameStatus,
} from '../../../hooks/game.ts';

import { GameWrapper } from '../game-wrapper/GameWrapper.tsx';

const Start = () => {
    const [, setPageStatus] = useGameStatus();
    const settings = useGameSettings();
    const { start: data } = useGameData();

    const onClickOk = () => {
        setPageStatus('game');
    };

    return (
        <GameWrapper>
            <div className={styles.start__container}>
                <div className={styles.start__inner}>
                    <p className={styles.start__title}>{data?.title}</p>
                    <p className={styles.start__level}>
                        Уровень {settings.level || 1}
                    </p>

                    <div className={styles.start__subTitle}>
                        <p className={styles.start__subtext_1}>
                            {data?.subTitle1}
                        </p>
                        <p className={styles.start__subtext_2}>
                            {data?.subTitle2}
                        </p>
                    </div>
                    <p className={styles.start__subtext_3}>{data?.subTitle3}</p>
                    <Table />
                    <div className={styles.start__bottom}>
                        <p className={styles.start__bottomText}>
                            {data?.titleBottom}
                        </p>
                    </div>

                    <button
                        onClick={onClickOk}
                        className={styles.start__button}
                    >
                        <span>Ok</span>
                    </button>
                </div>
            </div>
        </GameWrapper>
    );
};

export default Start;
