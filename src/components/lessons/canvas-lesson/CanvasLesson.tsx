import { useEffect, useRef, useState } from 'react';
import imgSrc from './img/canvas-bg.png';
import styles from './styles.module.scss';

export const CanvasLesson = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    const context = useRef<CanvasRenderingContext2D>();

    useEffect(() => {
        context.current = ref.current?.getContext('2d') || undefined;

        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, []);

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isStart, setIsStart] = useState(true);
    const [mode, setMode] = useState('draw');

    const cutCircle = (x: number, y: number, radius: number) => {
        if (context?.current) {
            context.current.globalCompositeOperation = 'destination-out';
            context.current.arc(x, y, radius, 0, Math.PI * 2, true);
            context.current.fill();
        }
    };

    const handleMouseMove: React.MouseEventHandler = (e) => {
        const { left: leftStart = 0, top: topStart = 0 } =
            ref.current?.getBoundingClientRect() as any;

        const [left, top] = [e.clientX - leftStart, e.clientY - topStart];

        if (!isMouseDown) {
            return;
        }

        if (mode === 'clear') {
            cutCircle(left, top, 10);
            return;
        }
        if (context.current) {
            context.current.globalCompositeOperation = 'source-over';
            if (isStart) {
                context.current.moveTo(left, top);
                setIsStart(false);
            } else {
                context.current.lineTo(left, top);
                context.current.lineWidth = 3;
                context.current.stroke();
            }
        }
    };

    const handleMouseDown = () => {
        setIsMouseDown(true);
        if (context.current) {
            context.current.beginPath();
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            className={styles.wrap}
            style={{ background: `url(${imgSrc}) left bottom no-repeat` }}
        >
            <canvas
                ref={ref}
                className={styles.canvas}
                width="980"
                height="730"
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
            ></canvas>
        </div>
    );
};
