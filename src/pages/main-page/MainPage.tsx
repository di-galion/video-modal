import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { showNotification } from '../../store/account-data/accountData';
import { useConnection } from '../../hooks/useConnection';
import { useParams } from 'react-router-dom';
import { useLessonId } from '../../hooks/lessons';

const MainPage = () => {
    const { fetchLessons } = useActions();
    const isError = useApiError();
    const { name } = useParams();
    const id = useLessonId();

    useEffect(() => {
        if (name) {
            fetchLessons({
                theme: name,
                id,
            });
        }
    }, [name]);

    //useConnection();

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
