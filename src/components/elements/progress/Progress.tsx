import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface ProgressProps {
    width?: number;
    radius?: number;
    backgroundColor?: string;
    color: string;
    lineWeight?: number;
    max: number;
    progress: number;
}

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
    width = 200,
    radius,
    backgroundColor = '#e0e0e0',
    color = '#60e6a8',
    lineWeight = 20,
    max,
    progress,
    children,
}) => {
    radius = radius || width / 2 - 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * ((max - progress) / max);

    return (
        <div className={styles.block}>
            <svg
                className={styles.svg}
                width={width}
                height={width}
                viewBox={`0 0 ${width} ${width}`}
            >
                <circle
                    r={radius}
                    cx={width / 2}
                    cy={width / 2}
                    fill="transparent"
                    stroke={backgroundColor}
                    strokeWidth={lineWeight}
                ></circle>
                <circle
                    r={radius}
                    cx={width / 2}
                    cy={width / 2}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={lineWeight}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                ></circle>
            </svg>
            <div className={styles.text}>{children}</div>
        </div>
    );
};
