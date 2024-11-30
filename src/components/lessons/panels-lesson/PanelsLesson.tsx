import { useCallback, useEffect } from 'react';
import { useGameStatus } from '../../../hooks/game';
import {
    useCurrentLesson,
    useCurrentLessonIndex,
    useGameLessonMode,
} from '../../../hooks/lessons';
import { useActions } from '../../../hooks/useActions';
import { Image } from '../../elements/image/Image';
import { GameViewer } from '../../game-viewer/GameViewer';
import { Panel } from '../../panel/Panel';
import { Video } from '../../elements/video/Video';
import { IPanelLesson, IPanelLessonItem } from '../../../typings/lesson.module';
import { createGames } from '../../../utils/games';

export const PanelsLesson = () => {
    const { clearSettings, clearResult, clearStorage } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();
    const [lesson] = useCurrentLesson();
    const { items } = lesson as IPanelLesson;

    useEffect(() => {
        clearResult();
        clearSettings();
        clearStorage();
        setStatus('settings');
        setMode('list');
    }, [lessonIndex]);

    const renderItem = useCallback((item: IPanelLessonItem) => {
        const defaultWidth = 800;
        const width = item.imageWidth || defaultWidth
        switch (item.type) {
            case 'image':
                return <Image src={item.url} width={width} />;
            case 'video':
                return <Video src={item.url} width={width} />;
            case 'games':
                return <GameViewer games={createGames(item.games)} />;
        }
    }, []);

    return (
        <>
            {items.map((item, index) => {
                return (
                    <Panel
                        key={index}
                        name={index.toString()}
                        title={item.title}
                        collapse={Boolean(index)}
                    >
                        {renderItem(item)}
                    </Panel>
                );
            })}
        </>
    );
};
