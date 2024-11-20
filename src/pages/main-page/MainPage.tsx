import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { showNotification } from '../../store/account-data/accountData';
import { useWsConnect } from '../../hooks/useWsConnect';

const MainPage = () => {
    const { fetchLessons } = useActions();
    const isError = useApiError();

    useEffect(() => {
        fetchLessons();
    }, []);

    useWsConnect();

    useEffect(() => {
        if (isError) {
            showNotification({
                text: 'Ошибка при запросе на сервер',
                type: 'error',
            });
        }
    }, [isError]);

    return (
        <MainPageWrapper>
            <LeftPanel />
            <MainSection />
        </MainPageWrapper>
    );
};

export default MainPage;
