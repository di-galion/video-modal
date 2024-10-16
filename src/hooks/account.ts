import { useTypedSelector } from './useTypedSelector';

export function useCurrentRole() {
    const index = useTypedSelector((state) => state.accountData.role);
    return index;
}

export function useAccount() {
    const data = useTypedSelector((state) => state.accountData);
    return data;
}
