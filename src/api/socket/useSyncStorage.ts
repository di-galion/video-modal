import { useMemo } from 'react';
import { useGame } from '../../hooks/game';
import { useWebSocket } from './useWebSocket';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';

export function useSyncStorage<T extends Record<string, any>>() {
    const { syncStorage = {} } = useGame();
    const storage = useMemo(() => syncStorage as T, [syncStorage]);
    const { role } = useAccount();

    const { sendStorageData } = useWebSocket();

    function updateStorage<Name extends Partial<keyof T>>(
        name: Name,
        value: T[Name]
    ) {
        if (isTeacher(role)) {
            sendStorageData(name as string, value);
        }
    }

    return { ...storage, updateStorage };
}
