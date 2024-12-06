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
import { StageWrap } from './stage-wrapper/StageWrapper';
import { MultTable } from '../../mult-table/MultTable';

export const PanelsLesson = () => {
    const { clearSettings, clearResult } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();
    const [lesson] = useCurrentLesson();
    const { items } = lesson as IPanelLesson;

    useEffect(() => {
        clearResult();
        clearSettings();
        setStatus('settings');
        setMode('list');
    }, [lessonIndex]);

    const renderItem = useCallback((item: IPanelLessonItem, index: number) => {
        const defaultWidth = 800;
        const width = item.imageWidth || defaultWidth;
        switch (item.type) {
            case 'image':
                return <Image src={item.url} width={width} />;
            case 'video':
                return <Video url={item.url} width={width} controls />;
            case 'games':
                return <GameViewer games={createGames(item.games)} />;
            case 'multTable':
                return (
                    <MultTable
                        itemsType={item.itemsType}
                        name={`multTable_${lessonIndex}_${index}`}
                    />
                );
        }
    }, []);

    return (
        <>
            {items.map((item, index) => {
                return (
                    <Panel
                        key={index}
                        name={`panel${index.toString()}`}
                        title={item.title}
                        collapse={Boolean(index)}
                        height={item.height}
                    >
                        {item.stage ? (
                            <StageWrap title={item.stageTitle}>
                                {renderItem(item, index)}
                            </StageWrap>
                        ) : (
                            renderItem(item, index)
                        )}
                    </Panel>
                );
            })}
        </>
    );
};
