import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { useParams } from 'react-router-dom';
import { Role } from '../../constants/roles.constants';
import { showNotification } from '../../store/account-data/accountData';

const MainPage = () => {
    const { fetchLessons } = useActions();
    const isError = useApiError();
    const { role, token } = useParams();
    const { setRole } = useActions();

    useEffect(() => {
        fetchLessons();
    }, []);

    useEffect(() => {
        if (role) {
            setRole(role.toUpperCase() as Role);
        }
        if (token) {
            localStorage.setItem('TOKEN', token);
        }
    }, [role]);

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
