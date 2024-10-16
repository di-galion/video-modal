import { useTypedSelector } from './useTypedSelector';

export function useTheme() {
    const data = useTypedSelector((state) => state.themeData);
    return data;
}
