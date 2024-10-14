import classNames from 'classnames';
import styles from '../styles.module.scss';
import { EnumSectionTypes } from '../../../constants/sectionTypes.constants';
import { FC } from 'react';

interface TeacherBlockProps {
    onClickChangeSection: (type: EnumSectionTypes) => void;
    section: EnumSectionTypes;
}

export const TeacherBlock: FC<TeacherBlockProps> = ({
    onClickChangeSection,
    section,
}) => (
    <div className={styles.middle__buttonWrapper}>
        <div className={styles.middle__buttons}>
            <button
                onClick={() => onClickChangeSection(EnumSectionTypes.Plan)}
                className={classNames(styles.middle__button, {
                    [styles.middle__button_active]:
                        section === EnumSectionTypes.Plan,
                })}
            >
                <span>План занятия</span>
            </button>
            <button
                onClick={() => onClickChangeSection(EnumSectionTypes.List)}
                className={classNames(styles.middle__button, {
                    [styles.middle__button_active]:
                        section === EnumSectionTypes.List,
                })}
            >
                <span> Список студентов</span>
            </button>
        </div>
    </div>
);
