import { useTypedSelector } from './useTypedSelector';

export function useCurrentRole() {
    const index = useTypedSelector((state) => state.roleData.currentRole);
    return index;
}
