import { FC, useEffect } from 'react';
import { GameData, IGameStateSettings } from '../../typings/game.module';
import { useActions } from '../../hooks/useActions';
import { useGameSettings } from '../../hooks/game';
import { GameNavigator } from '../../components/game/game-navigator/GameNavigator';

const RegisteredElement: FC<{
    component: FC;
    data: (settings: IGameStateSettings) => GameData;
}> = ({ component: Component, data }) => {
    const { register } = useActions();
    const currentSettings = useGameSettings();

    useEffect(() => {
        register(data(currentSettings));
    }, [data, currentSettings]);

    return (
        <GameNavigator>
            <Component />
        </GameNavigator>
    );
};

export function register(
    component: FC,
    data: (settings: IGameStateSettings) => GameData
) {
    return () => <RegisteredElement component={component} data={data} />;
}
