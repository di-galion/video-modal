import lessonsData from './lessons-data/lessonsData';
import roleData from './role-data/roleData';
import sectionData from './section-data/sectionData';

export const rootActions = {
    ...lessonsData.actions,
    ...roleData.actions,
    ...sectionData.actions,
};
