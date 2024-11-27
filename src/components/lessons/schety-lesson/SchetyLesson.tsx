import { useEffect } from 'react';
import { useGameStatus } from '../../../hooks/game';
import {
    useCurrentLessonIndex,
    useGameLessonMode,
    useLessonGameList,
} from '../../../hooks/lessons';
import { useActions } from '../../../hooks/useActions';
import { Image } from '../../elements/image/Image';
import { GameViewer } from '../../game-viewer/GameViewer';
import { Panel } from '../../panel/Panel';
import ramkaImg from './img/ramka.gif';
import plankaImg from './img/planka.gif';
import ryadyImg from './img/ryady.gif';
import kostochkiImg from './img/kostochki.gif';
import nebesnyeKostochkiImg from './img/nebesnye_kostochki.gif';
import abacusImg from './img/abacus.jpg';
import { createPath } from '../../../utils/createPath';
import { Video } from '../../elements/video/Video';

export const SchetyLesson = () => {
    const { clearSettings, clearResult, clearStorage } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();
    const games = useLessonGameList();

    useEffect(() => {
        clearResult();
        clearSettings();
        clearStorage();
        setStatus('settings');
        setMode('list');
    }, [lessonIndex]);

    return (
        <>
            <Panel
                name="video"
                height={600}
                title="Демонстрация абакуса"
                collapse={false}
            >
                <Video
                    src={createPath('/assets/video/720.mp4')}
                    width={800}
                    controls
                />
            </Panel>
            <Panel name="1" height={600} title="Рамка" collapse={true}>
                <Image src={ramkaImg} width={800} />
            </Panel>
            <Panel name="2" height={600} title="Планка" collapse={true}>
                <Image src={plankaImg} width={800} />
            </Panel>
            <Panel name="3" height={600} title="Ряды" collapse={true}>
                <Image src={ryadyImg} width={800} />
            </Panel>
            <Panel
                name="4"
                height={600}
                title="Земные косточки"
                collapse={true}
            >
                <Image src={kostochkiImg} width={800} />
            </Panel>
            <Panel
                name="5"
                height={600}
                title="Небесные косточки"
                collapse={true}
            >
                <Image src={nebesnyeKostochkiImg} width={800} />
            </Panel>
            <Panel name="6" height={600} title="Абакус" collapse={true}>
                <Image src={abacusImg} width={800} />
            </Panel>
            <Panel name="game" height={600} title="Игра" collapse={true}>
                <GameViewer games={games} />
            </Panel>
        </>
    );
};
