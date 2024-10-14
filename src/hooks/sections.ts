import { useTypedSelector } from './useTypedSelector';

export function useCurrentSection() {
    const index = useTypedSelector((state) => state.sectionData.currentSection);
    return index;
}
