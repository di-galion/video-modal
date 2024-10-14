import { LeftPanel } from '../../components/left-panel/LeftPanel';
import MainSection from '../../components/main-section/MainSection';
import { MainPageWrapper } from './components/MainPageWrapper';

const MainPage = () => {
    return (
        <MainPageWrapper>
            <LeftPanel />
            <MainSection />
        </MainPageWrapper>
    );
};

export default MainPage;
