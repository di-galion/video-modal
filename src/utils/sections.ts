import { EnumSectionTypes } from '../constants/sectionTypes.constants';

export const isSectionPlan = (section: EnumSectionTypes) =>
    section === EnumSectionTypes.Plan;
export const isSectionList = (section: EnumSectionTypes) =>
    section === EnumSectionTypes.List;
