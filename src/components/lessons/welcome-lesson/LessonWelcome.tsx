import { Image } from '../../elements/image/Image';
import imgSrc from './img/welcome.png';

const LessonWelcome = () => {
    return (
        <div>
            <Image src={imgSrc} />
        </div>
    );
};

export default LessonWelcome;
