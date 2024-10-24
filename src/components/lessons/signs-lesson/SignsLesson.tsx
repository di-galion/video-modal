import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import { SignsLessonPanel } from './signs-lesson-panel/SignLessonPanel';

export const SignsLesson = () => {
    return (
        <>
            <SignsLessonPanel
                imgSrc={img1}
                title="Арифметический знак умножения"
            />
            <SignsLessonPanel
                imgSrc={img2}
                title="Арифметический знак умножения"
                collapse
            />
            <SignsLessonPanel
                imgSrc={img3}
                title="Арифметический знак умножения"
                collapse
            />
            <SignsLessonPanel
                imgSrc={img4}
                title="Арифметический знак сложения"
                collapse
            />
            <SignsLessonPanel
                imgSrc={img5}
                title="Арифметический знак вычитания"
                collapse
            />
            <SignsLessonPanel
                imgSrc={img6}
                title="Арифметический знак деления"
                collapse
            />
        </>
    );
};
