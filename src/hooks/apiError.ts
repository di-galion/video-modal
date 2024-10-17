import { useTypedSelector } from './useTypedSelector';

export function useApiError() {
    const data = useTypedSelector((state) => state.apiData.value);
    return data === 'error';
}
