import styles from './styles.module.scss';

export const Stars = ({ count }: { count: number }) => {
    return (
        <div className={styles.stars}>
            {[1, 2, 3].map((index) => {
                const isFilled = count >= index;
                const StarComponent = index === 2 ? StarLg : StarSm;
                return <StarComponent key={index} isFilled={isFilled} />;
            })}
        </div>
    );
};

const StarSm = ({ isFilled }: { isFilled: boolean }) => (
    <svg
        viewBox="0 0 193.5 200"
        className={`${styles.starSmall} ${
            isFilled ? styles.filled : styles.empty
        }`}
    >
        <defs>
            <linearGradient
                id="prefix__a"
                x1="-562.3"
                y1="-783.5"
                x2="-744.6"
                y2="-843.5"
                gradientTransform="matrix(.85 .52 -.52 .85 208 1126)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#e5912f"></stop>
                <stop offset="0.1" stopColor="#e8a330"></stop>
                <stop offset="0.2" stopColor="#eab131"></stop>
                <stop offset="0.3" stopColor="#ebb931"></stop>
                <stop offset="0.5" stopColor="#ebbb31"></stop>
                <stop offset="0.6" stopColor="#edc343"></stop>
                <stop offset="0.7" stopColor="#eec850"></stop>
                <stop offset="0.7" stopColor="#eeca55"></stop>
                <stop offset="0.8" stopColor="#edc445"></stop>
                <stop offset="0.8" stopColor="#ecbf3a"></stop>
                <stop offset="0.9" stopColor="#ebbc33"></stop>
                <stop offset="1" stopColor="#ebbb31"></stop>
            </linearGradient>
        </defs>
        <g>
            <path
                d="M109 194.2l-36.7-40.8A7.2 7.2 0 0066 151l-54.4 7a7.2 7.2 0 01-7.1-10.7L32 100a7.2 7.2 0 00.3-6.7L8.7 43.6a7.2 7.2 0 018-10L70.3 45a7.2 7.2 0 006.5-1.8l39.8-37.7a7.2 7.2 0 0112.1 4.5l5.7 54.6a7.2 7.2 0 003.7 5.5l48.2 26.3a7.2 7.2 0 01-.5 12.9l-50.2 22.2a7.2 7.2 0 00-4.1 5.3l-10.1 53.9a7.2 7.2 0 01-12.4 3.5z"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="7"
                fill={isFilled ? 'url(#prefix__a)' : '#ccc'}
            ></path>
        </g>
    </svg>
);

const StarLg = ({ isFilled }: { isFilled: boolean }) => (
    <svg
        viewBox="0 0 193.5 200"
        className={`${styles.starLarge} ${
            isFilled ? styles.filled : styles.empty
        }`}
    >
        <defs>
            <linearGradient
                id="prefix__a"
                x1="-562.3"
                y1="-783.5"
                x2="-744.6"
                y2="-843.5"
                gradientTransform="matrix(.85 .52 -.52 .85 208 1126)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#e5912f"></stop>
                <stop offset="0.1" stopColor="#e8a330"></stop>
                <stop offset="0.2" stopColor="#eab131"></stop>
                <stop offset="0.3" stopColor="#ebb931"></stop>
                <stop offset="0.5" stopColor="#ebbb31"></stop>
                <stop offset="0.6" stopColor="#edc343"></stop>
                <stop offset="0.7" stopColor="#eec850"></stop>
                <stop offset="0.7" stopColor="#eeca55"></stop>
                <stop offset="0.8" stopColor="#edc445"></stop>
                <stop offset="0.8" stopColor="#ecbf3a"></stop>
                <stop offset="0.9" stopColor="#ebbc33"></stop>
                <stop offset="1" stopColor="#ebbb31"></stop>
            </linearGradient>
        </defs>
        <g>
            <path
                d="M109 194.2l-36.7-40.8A7.2 7.2 0 0066 151l-54.4 7a7.2 7.2 0 01-7.1-10.7L32 100a7.2 7.2 0 00.3-6.7L8.7 43.6a7.2 7.2 0 018-10L70.3 45a7.2 7.2 0 006.5-1.8l39.8-37.7a7.2 7.2 0 0112.1 4.5l5.7 54.6a7.2 7.2 0 003.7 5.5l48.2 26.3a7.2 7.2 0 01-.5 12.9l-50.2 22.2a7.2 7.2 0 00-4.1 5.3l-10.1 53.9a7.2 7.2 0 01-12.4 3.5z"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="7"
                fill={isFilled ? 'url(#prefix__a)' : '#ccc'}
            ></path>
        </g>
    </svg>
);
