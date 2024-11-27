import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineCheck } from 'react-icons/md';
import styles from './styles.module.scss';
import {
    useCurrentLessonIndex,
    useLessonCount,
    useLessonPager,
} from '../../../hooks/lessons';
import { BottomButton } from '../bottom-button/BottomButton';

const BottomPart = () => {
    const [prev, next] = useLessonPager();
    const page = useCurrentLessonIndex();
    const count = useLessonCount();

    return (
        <div className={styles.bottom}>
            <BottomButton
                disabled={!page}
                className={styles.bottom__button_left}
                onClick={() => prev()}
            >
                <FaArrowLeft className={styles.icon_left} color={'blue'} />
                Назад
            </BottomButton>

            <BottomButton disabled className={styles.buttonSave}>
                <MdOutlineCheck size={30} color="green" />
                <span>Этап сохранен</span>
            </BottomButton>

            <BottomButton
                disabled={page >= count - 1}
                className={styles.bottom__button_right}
                onClick={() => next()}
            >
                Далее
                <FaArrowRight className={styles.icon_right} color={'blue'} />
            </BottomButton>
        </div>
    );
};

export default BottomPart;
