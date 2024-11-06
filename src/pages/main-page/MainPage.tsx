import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { ApiError } from '../../components/api-error/ApiError';
import { useParams } from 'react-router-dom';
import { Role } from '../../constants/roles.constants';

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

    return (
        <MainPageWrapper>
            <LeftPanel />
            <MainSection />
            {isError ? <ApiError /> : null}
        </MainPageWrapper>
    );
};

export default MainPage;
