import PanelSectionMiddle from '../panel-section-middle/PanelSectionMiddle';
import { VideoSection } from '../video-section/VideoSection';
import { LeftPanelExitButton } from './components/LeftPanelExitButton';
import { LeftPanelWrapper } from './components/LeftPanelWrapper';

export const LeftPanel = () => (
    <LeftPanelWrapper>
        <VideoSection />
        <PanelSectionMiddle />
        <LeftPanelExitButton />
    </LeftPanelWrapper>
);
