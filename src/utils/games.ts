import { GAME_DATA_MAP } from '../constants/game.contants';

export function createGames(games: string[]) {
    return games.map((game) => ({
        name: game,
        imgUrl: GAME_DATA_MAP[game].image,
        title: GAME_DATA_MAP[game].title,
    }));
}
