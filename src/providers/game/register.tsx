import { FC, useEffect } from 'react';
import { GameData, IGameStateSettings } from '../../typings/game.module';
import { useActions } from '../../hooks/useActions';
import { useGameSettings } from '../../hooks/game';
import { GameNavigator } from '../../components/game/game-navigator/GameNavigator';

type RegisterSettings = (settings: IGameStateSettings) => GameData['settings'];
type RegisterStart = (settings: IGameStateSettings) => GameData['start'];

type RegisterData = Omit<GameData, 'settings' | 'start'> & {
    settings: RegisterSettings;
    start: RegisterStart;
};

const RegisteredElement: FC<{
    component: FC;
    data: RegisterData;
}> = ({ component: Component, data }) => {
    const { register } = useActions();
    const currentSettings = useGameSettings();
    const { settings, start, ...props } = data;

    useEffect(() => {
        register({
            ...props,
            settings: settings(currentSettings),
            start: start(currentSettings),
        });
    }, [data, currentSettings]);

    return (
        <GameNavigator>
            <Component />
        </GameNavigator>
    );
};

export function register(component: FC, data: RegisterData) {
    return () => <RegisteredElement component={component} data={data} />;
}
