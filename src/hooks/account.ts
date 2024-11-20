import { isTeacher } from '../utils';
import { useTypedSelector } from './useTypedSelector';

export function useCurrentRole() {
    const index = useTypedSelector((state) => state.accountData.role);
    return index;
}

export function useAccount() {
    const data = useTypedSelector((state) => state.accountData);
    return data;
}

export function useGameAccess() {
    const multiPlayer = useTypedSelector(
        (state) => state.accountData.multiPlayer
    );
    const role = useCurrentRole();
    if (!multiPlayer || isTeacher(role)) {
        return true;
    }
    return false;
}
