import lessonsData from './lessons-data/lessonsData';
import roleData from './account-data/accountData';
import sectionData from './section-data/sectionData';

export const rootActions = {
    ...lessonsData.actions,
    ...roleData.actions,
    ...sectionData.actions,
};
