import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { FaLock } from 'react-icons/fa';
//import { URL_MAIN } from '../../../constants/url.constants';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { Role } from '../../constants/roles.constants';
import { useWebSocket } from '../../api/socket/useWebSocket';
import styles from './styles.module.scss';
import { useWsIsReady } from '../../api/socket/useWsReady';
import { PageTitle } from '../../components/elements/pageTitle';
import { Button } from '../../components/elements/button';
import { PageWrapper } from '../../components/wrappers/pageWrapper';
import { useGameLessonMode } from '../../hooks/lessons';
import { Game } from '../../components/game/Game';
import { GAME_DATA_MAP } from '../../constants/game.contants';
import { createPath } from '../../utils/createPath';

export const GamesPage = () => {
    const backgroundImage = {
        background: `url('${createPath('/assets/img/interface/main-bg.png')})`,
        minHeight: '100vh',
        margin: 0,
        padding: 0,
    };

    const { role, token, name } = useParams();
    const { setRole, setSync } = useActions();
    const { connect } = useWebSocket();
    const isReady = useWsIsReady();
    const [mode] = useGameLessonMode();

    useEffect(() => {
        if (role) {
            setRole(role.toUpperCase() as Role);
        }
        if (token) {
            localStorage.setItem('TOKEN', token);
        }
        if (role && token) {
            setSync(true);
            connect();
        } else {
            setSync(false);
        }
    }, [role, token]);

    const { clearSettings } = useActions();

    useEffect(() => {
        clearSettings();
    }, []);

    return (
        <div style={backgroundImage}>
            <PageWrapper>
                {mode === 'list' ? (
                    <>
                        <PageTitle>
                            <div className={styles.pageTitle}>
                                {name && gamesList[name].title}
                            </div>
                        </PageTitle>
                        <div className={styles.gamesList}>
                            {name &&
                                gamesList[name].items.map(
                                    (item: any, index) => (
                                        <GameCover
                                            {...item}
                                            key={index}
                                            isReady={isReady}
                                        />
                                    )
                                )}
                        </div>
                        <div className={styles.buttons}>
                            <Button link={'/'}>Выход</Button>
                        </div>
                    </>
                ) : (
                    <Game />
                )}
            </PageWrapper>
        </div>
    );
};

export const GameCover = ({
    game,
    isLocked,
    isReady,
}: {
    game: string;
    isLocked?: boolean;
    isReady?: boolean;
}) => {
    //const navigate = useNavigate();

    const { gotoGame } = useWebSocket();
    const [, setMode] = useGameLessonMode();

    const goToGame = () => {
        if (!isLocked && isReady) {
            //const link = `${URL_MAIN}game/${game}`;
            //navigate(link);
            setMode('game');
            gotoGame(game);
        }
    };

    const { title, imgSrc } = {
        title: GAME_DATA_MAP[game].title,
        imgSrc: GAME_DATA_MAP[game].image,
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={classNames(
                    styles.container,
                    styles[`container__${game}`],
                    { [styles.locked]: isLocked || !isReady }
                )}
            >
                <div onClick={goToGame} className={styles.link}>
                    <img className={styles.img} src={imgSrc} alt="" />
                    <span className={styles.title}>{title}</span>
                    {isLocked && (
                        <div className={styles.lockOverlay}>
                            <FaLock className={styles.lockIcon} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const gamesList: Record<
    string,
    { title: string; items: Array<{ game: string; isLocked?: boolean }> }
> = {
    'mult-table': {
        title: 'Таблица умножения',
        items: [{ game: 'multTable' }],
    },
    'mental-arithmetics': {
        title: 'Ментальная арифметика',
        items: [
            { game: 'flashCards' },
            { game: 'aboriginalsRiddles' },
            { game: 'shadowTheater' },
        ],
    },
};
/*{
        game: 'shadowTheater',
        title: 'Театр Теней',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/findNewItem.png',
    },
    {
        game: 'aboriginalsRiddles',
        title: 'Загадки аборигенов',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/aboriginalsRiddles.png',
    },*/

/*{
        game: 'puzzleAbacus',
        title: 'Собери абакус',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/puzzleAbacus.png',
    },
    {
        game: 'completeRow',
        title: 'Тайная пещера',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/completeRow.png',
    },

    {
        game: 'laboratory',
        title: 'Лаборатория',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/laboratory.png',
        isLocked: true,
    },

    {
        game: 'catchFlashCard',
        title: 'Долина сокровищ',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/catchFlashCard.png',
        isLocked: true,
    },
    {
        game: 'rememberAndFind',
        title: 'Ловцы жемчуга',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/rememberAndFind.png',
        isLocked: true,
    },
    {
        game: 'bricks',
        title: 'Кирпичики',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/bricks.png',
        isLocked: true,
    },
    // {
    // 	game: 'vitamix',
    // 	title: 'ВитаМИКС',
    // 	imgSrc: import.meta.env.BASE_URL + '/assets/img/courses/mentalArithmetic/logo/vitamix.png',
    // },
    {
        game: 'presents',
        title: 'Подарки',
        imgSrc:
            import.meta.env.BASE_URL +
            '/assets/img/courses/mentalArithmetic/logo/presents.png',
        isLocked: true,
    },*/
