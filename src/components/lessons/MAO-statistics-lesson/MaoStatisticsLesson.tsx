import { Progress } from '../../elements/progress/Progress';
import { Statistics } from '../../elements/statistics/Statistics';
import styles from './styles.module.scss';

export const MaoStatisticsLesson = () => {
    return (
        <>
            <div className={styles.panel}>
                <Statistics
                    backgroundColor="#33AA33"
                    max={10}
                    progress={4}
                    progressColor="#338833"
                >
                    Работа на занятии
                </Statistics>
                <Statistics
                    backgroundColor="#3333AA"
                    max={10}
                    progress={4}
                    progressColor="#338833"
                >
                    Прохождение игр
                </Statistics>
                <Statistics
                    backgroundColor="#AAAA33"
                    max={10}
                    progress={4}
                    progressColor="#338833"
                >
                    Счет на физическом абакусе
                </Statistics>
                <Statistics
                    backgroundColor="#AA5555"
                    max={10}
                    progress={4}
                    progressColor="#338833"
                >
                    Счет на воображаемом абакусе
                </Statistics>
                <Statistics
                    backgroundColor="#AA55AA"
                    max={10}
                    progress={4}
                    progressColor="#338833"
                >
                    Работа с ФК
                </Statistics>
            </div>
            <br />
            <div className={styles.panel}>
                <div className={styles.panel__item}>
                    Статистика кликов преподавателя
                    <Progress color="#33AA33" progress={25} max={100}>
                        <span style={{ color: '#33AA33', fontSize: 24 }}>
                            25%
                        </span>
                    </Progress>
                </div>
                <div className={styles.panel__item}>
                    <Progress
                        color="#3333AA"
                        progress={25}
                        max={100}
                        width={260}
                    >
                        Статистика занятия
                        <span style={{ color: '#3333AA', fontSize: 20 }}>
                            25%
                        </span>
                    </Progress>
                </div>
            </div>
        </>
    );
};
