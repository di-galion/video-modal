import { useMemo } from 'react';
import { useGame } from '../../hooks/game';
import { useWebSocket } from './useWebSocket';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export function useSyncStorage<T extends Record<string, any>>() {
    const { syncStorage = {} } = useGame();
    const storage = useMemo(() => syncStorage as T, [syncStorage]);
    const { role } = useAccount();
    const multiPlayer = useTypedSelector(
        (store) => store.accountData.multiPlayer
    );

    const { sendStorageData } = useWebSocket();

    function updateStorage(data: Partial<T>) {
        if (isTeacher(role) || !multiPlayer) {
            sendStorageData(data);
        }
    }

    return { ...storage, updateStorage };
}
