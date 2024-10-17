import { useTypedSelector } from './useTypedSelector';

export function useThemeName() {
    const data = useTypedSelector((state) => state.lessonsData.themeName);
    return data;
}
