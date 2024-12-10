import styles from './styles.module.scss';
import { useWsIsReady } from '../../../api/socket/useWsReady';
import { useActions } from '../../../hooks/useActions';
import { useImages } from '../../../hooks/game';
import { useEffect, useState } from 'react';
import Preloader from '../../elements/preloader/Preloader';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { isTeacher } from '../../../utils';
import { useCurrentRole } from '../../../hooks/account';

export const Waiting = () => {
    const { setPageStatus } = useActions();
    const images = useImages();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (images) {
            const count = images.length;
            let cc = 0;
            for (const image of images) {
                const img: HTMLImageElement = document.createElement('img');
                img.src = image;
                img.onload = () => {
                    cc++;
                    if (cc === count) {
                        setReady(true);
                    }
                };
            }
        } else {
            setReady(true);
        }
    });

    const wsready = useWsIsReady();
    const role = useCurrentRole();

    const settings = useTypedSelector((state) => state.settingsData);

    useEffect(() => {
        if (
            (wsready || (isTeacher(role) && settings.withoutStudent)) &&
            ready
        ) {
            setPageStatus('game');
        }
    }, [ready, wsready, settings.withoutStudent]);

    return (
        <div className={styles.waiting}>
            {ready ? 'Ожидание участников...' : <Preloader />}
        </div>
    );
};
