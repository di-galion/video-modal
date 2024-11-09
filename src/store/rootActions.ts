import lessonsData, { fetchLessons } from './lessons-data/lessonsData';
import roleData from './account-data/accountData';
import sectionData from './section-data/sectionData';
import accountData from './account-data/accountData';
import gameData from './game-data/GameData';
import settingsData from './settings-data/SettingsData';

export const rootActions = {
    ...lessonsData.actions,
    ...roleData.actions,
    ...sectionData.actions,
    ...accountData.actions,
    ...gameData.actions,
    ...settingsData.actions,
    fetchLessons,
};
