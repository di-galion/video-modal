import styles from './styles.module.scss';
import { PanelItem } from './components/PanelItem';
import {
    useCurrentLessonIndex,
    useLessons,
    useLessonSwitcher,
} from '../../hooks/lessons';
/*
const ITEMS = [
  {
    status: true,
    title: "Приветствие",
  },
  {
    status: true,
    title: "Знакомство с Ментальной арифметикой",
  },
  {
    status: false,
    title: "Знакомство со счетами",
  },
  {
    status: false,
    title: "Знакомство с цифрами",
  },
  {
    status: false,
    title: "Игра с Флешкартами",
  },
  {
    status: false,
    title: "Разминка на абакусе",
  },
  {
    status: false,
    title: "Счет на физическом абакусе",
  },
  {
    status: false,
    title: "Включение воображения",
  },
  {
    status: false,
    title: "Счет на воображаемом абакусе",
  },
  {
    status: false,
    title: "Игра на счет",
  },
  {
    status: false,
    title: "Заключение",
  },
  {
    status: false,
    title: "Статистика",
  },
];*/

const PanelItems = () => {
    const current = useCurrentLessonIndex();
    const changeLesson = useLessonSwitcher();
    const lessons = useLessons();

    const onItemClick = (index: number) => {
        changeLesson(index);
    };

    return (
        <div className={styles.content}>
            {lessons.map((item, index) => {
                return (
                    <PanelItem
                        key={index}
                        onItemClick={onItemClick}
                        index={index}
                        current={current}
                        item={item}
                    />
                );
            })}
        </div>
    );
};
export default PanelItems;
