import styles from './styles.module.scss';
import { isTeacher } from '../../utils/roles';
import { useCurrentRole } from '../../hooks/account';
import { TeacherBlock } from './components/TeacherBlock';
import { EnumSectionTypes } from '../../constants/sectionTypes.constants';
import { StudentBlock } from './components/StudentBlock';
import { PlanBlock } from './components/PlanBlock';
import { ListBlock } from './components/ListBlock';
import { useCurrentSection } from '../../hooks/sections';
import { useActions } from '../../hooks/useActions';
import { isSectionPlan } from '../../utils/sections';

const PanelSectionMiddle = () => {
    const section = useCurrentSection();
    const { setSection } = useActions();
    const role = useCurrentRole();

    const onClickChangeSection = (value: EnumSectionTypes) => {
        setSection(value);
    };

    return (
        <div className={styles.middle}>
            {isTeacher(role) ? (
                <TeacherBlock
                    onClickChangeSection={onClickChangeSection}
                    section={section}
                />
            ) : (
                <StudentBlock />
            )}

            {isSectionPlan(section) ? <PlanBlock /> : <ListBlock />}
        </div>
    );
};

export default PanelSectionMiddle;
