import lessonsData, { fetchLessons } from './lessons-data/lessonsData';
import roleData from './account-data/accountData';
import sectionData from './section-data/sectionData';
import accountData from './account-data/accountData';
import gameData from './game-data/gamesData';
import settingsData from './settings-data/settingData';
import { setApiState } from './api-status-data/apiStatusData';

export const rootActions = {
    ...lessonsData.actions,
    ...roleData.actions,
    ...sectionData.actions,
    ...accountData.actions,
    ...gameData.actions,
    ...settingsData.actions,
    setApiState,
    fetchLessons,
};
