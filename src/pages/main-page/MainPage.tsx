import { useEffect } from 'react';
import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { useActions } from '../../hooks/useActions';

import { MainPageWrapper } from './components/MainPageWrapper';
import { useApiError } from '../../hooks/apiError';
import { ApiError } from '../../components/api-error/ApiError';

const MainPage = () => {
    const { fetchLessons } = useActions();
    const isError = useApiError();

    useEffect(() => {
        fetchLessons();
    }, []);

    return (
        <MainPageWrapper>
            <LeftPanel />
            <MainSection />
            {isError ? <ApiError /> : null}
        </MainPageWrapper>
    );
};

export default MainPage;
