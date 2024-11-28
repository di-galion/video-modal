import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { showNotification } from '../../store/account-data/accountData';
import { useWsConnect } from '../../hooks/useWsConnect';
import { useParams } from 'react-router-dom';

const MainPage = () => {
    const { fetchLessons } = useActions();
    const isError = useApiError();
    const { name, section = 0 } = useParams();

    useEffect(() => {
        if (name) {
            fetchLessons({ theme: name, index: Number(section) });
        }
    }, [name]);

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
