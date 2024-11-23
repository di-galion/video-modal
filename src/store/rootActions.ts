import {
    default as accountData,
    default as roleData,
} from './account-data/accountData';
import gameData from './game-data/GameData';
import lessonsData, { fetchLessons } from './lessons-data/lessonsData';
import sectionData from './section-data/sectionData';
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
