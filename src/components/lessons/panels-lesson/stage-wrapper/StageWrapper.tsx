import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const StageWrap: FC<
    PropsWithChildren<{ disabled?: boolean; title?: string }>
> = ({ children, title = 'Реши примеры и запиши результат', disabled }) => {
    return (
        <div className={classNames(styles.content)}>
            <div className={styles.content__box}>
                <div className={styles.content__wrap}>
                    <p className={styles.content__text}>{title}</p>
                    <div>
                        <div className={styles.content__container}>
                            <div className={styles.content__btn_wrap}>
                                <button className={styles.content__btn}>
                                    <i
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {disabled ? (
                                            <svg
                                                viewBox="0 0 24 22"
                                                width="1em"
                                                height="1em"
                                                fill="none"
                                            >
                                                <path
                                                    d="M22.6 1.4l-.5-.4A1.3 1.3 0 0021 1c-.2 0-.4.2-.5.4l-11.8 15-5-6.3-.5-.5a1.3 1.3 0 00-1.2 0l-.6.5-.3.7a2.5 2.5 0 000 1.5l.4.7 6 7.7.6.4a1.3 1.3 0 001.2 0c.2 0 .4-.2.5-.4l13-16.3.3-.7A2.5 2.5 0 0023 2a2 2 0 00-.4-.7z"
                                                    fill="#38D800"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                viewBox="0 0 32 32"
                                                width="1em"
                                                height="1em"
                                                fill="none"
                                            >
                                                <g clip-path="url(#prefix__clip0)">
                                                    <path
                                                        d="M31.7 7.3l-7-7A1 1 0 0024 0H1a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V8a1 1 0 00-.3-.7zM18 2v4H8V2h10zM8 30V18h16v12H8zm22 0h-4V17a1 1 0 00-1-1H7a1 1 0 00-1 1v13H2V2h4v5a1 1 0 001 1h12a1 1 0 001-1V2h3.6L30 8.4V30z"
                                                        fill="#5E72D9"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="prefix__clip0">
                                                        <path
                                                            fill="#fff"
                                                            d="M0 0h32v32H0z"
                                                        ></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        )}
                                    </i>
                                    <span className={styles.content__btn_text}>
                                        {disabled
                                            ? 'Задание сохранено'
                                            : 'Сохранить задание'}
                                    </span>
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
