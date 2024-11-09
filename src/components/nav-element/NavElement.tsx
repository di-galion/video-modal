'use client';
import { default as classNames, default as cn } from 'classnames';
import {
    FC,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import DropDownIcon from '../drop-down-icon/DropDownIcon';
import LayoutDetectClick from '../layout-detect-click/LayoutDetectClick';
import styles from './styles.module.scss';
interface INavElement {
    toggle?: boolean;
    isMarginBottom?: string;
    id?: string;
    startOpen?: boolean;
    title: string | ReactElement;
    icon?: string | ReactElement;
    onClick?: () => void;
    isDropDownIcon?: boolean;
    stylesTitle?: any;
    stopPropagation?: boolean;
    classTitle?: string;
    variant?: EnumNavElementVariant;
    stylesLi?: any;
    hideShowAreaStyles?: any;
    dropDownIconSize?: number | string;
    classHideShowArea?: string;
    closeOnClickoutSide?: boolean;
    classNavLink?: string;
    zIndex?: string | number;
    backgroundColorVariant?: EnumNavElementBackgroundColorVariant;
    idElementToDetectClick?: string;
    disabled?: boolean;
    closeIfLoseFocus?: boolean;
    headerElement: ReactElement;
}

export enum EnumNavElementVariant {
    ABSOLUTE_HOVER = 'absolute hover',
    SELECTOR = 'selector',
    NAV = 'nav',
    SELECTOR_FILLED = 'selector filled',
    NO_BORDER = 'no border',
    ABSOLUTE = 'absolute',
    SELECTOR_ABSOLUTE = 'selector absolute',
}
export enum EnumNavElementBackgroundColorVariant {
    GRAY_GRADIENT = 'gray gradient',
}
const NavElement: FC<PropsWithChildren<INavElement>> = ({
    toggle = false,
    classTitle = '',
    startOpen,
    title,
    hideShowAreaStyles,
    stylesTitle,
    icon,
    backgroundColorVariant,
    idElementToDetectClick,
    disabled,
    onClick = () => {},
    children,
    isDropDownIcon = false,
    stopPropagation = false,
    variant = EnumNavElementVariant.NAV,
    stylesLi,
    dropDownIconSize = 30,
    isMarginBottom = true,
    classHideShowArea = '',
    closeOnClickoutSide,
    classNavLink = '',
    headerElement,
    closeIfLoseFocus = true,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(toggle);
    const ref = useRef<HTMLDivElement>(null);
    const [didMount, setDidMount] = useState(false);

    const uniqId = useMemo(
        () => Math.floor(Math.random() * Math.random() * 100).toString(),
        []
    );

    const onClickHandler = (e?: any) => {
        if (!!e && stopPropagation) e.stopPropagation();
        if (ref.current === null || disabled) return;
        // ref.current.classList.toggle(styles.collapse)

        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (startOpen) setDidMount(true);
    }, []);
    useEffect(() => {
        if (startOpen && !!ref.current) {
            onClickHandler();
        }
    }, [didMount]);

    useEffect(() => {
        if (!!ref.current && isOpen) {
            setIsOpen(!isOpen);
        }
    }, [toggle]);

    useEffect(() => {
        if (closeIfLoseFocus) {
            const onClickEventHandler = (e: Event) => {
                if (
                    !document.getElementById(uniqId)?.contains(e.target as Node)
                ) {
                    setIsOpen(false);
                }
            };
            if (!!idElementToDetectClick) {
                document
                    .getElementById(idElementToDetectClick)
                    ?.addEventListener('click', onClickEventHandler);
            } else {
                document.addEventListener('click', onClickEventHandler);
            }
            return function () {
                return document.removeEventListener(
                    'scroll',
                    onClickEventHandler
                );
            };
        }
    }, [closeIfLoseFocus]);
    return (
        <div
            id={uniqId}
            className={cn(styles.nav_item)}
            style={stylesLi}
            onClick={onClick}
        >
            {isOpen && closeOnClickoutSide && (
                <LayoutDetectClick onClick={onClickHandler} />
            )}
            {!!headerElement ? (
                <div
                    onClick={(e: any) => {
                        onClickHandler(e);
                    }}
                >
                    {headerElement}
                </div>
            ) : (
                <div
                    onClick={onClickHandler}
                    className={cn(styles.nav_link, classNavLink, {
                        [styles.selector]:
                            variant === EnumNavElementVariant.SELECTOR ||
                            variant === EnumNavElementVariant.SELECTOR_FILLED,
                        [styles.selector_absolute]:
                            variant === EnumNavElementVariant.SELECTOR_ABSOLUTE,
                        [styles.no_border]:
                            variant === EnumNavElementVariant.NO_BORDER,
                        [styles.selector_filled]:
                            variant === EnumNavElementVariant.SELECTOR_FILLED,
                        [styles.absolute]:
                            variant === EnumNavElementVariant.ABSOLUTE,
                        [styles.absolute_hover]:
                            variant === EnumNavElementVariant.ABSOLUTE_HOVER,
                        // colors
                        [styles.gray_gradient]:
                            backgroundColorVariant ===
                            EnumNavElementBackgroundColorVariant.GRAY_GRADIENT,
                    })}
                >
                    {isDropDownIcon && (
                        <DropDownIcon
                            isOpen={isOpen}
                            dropDownIconSize={dropDownIconSize}
                        />
                    )}
                    <div
                        className={classNames(
                            'flex items-center gap-1  w-full',
                            {
                                'mb-[0.3rem]': isMarginBottom,
                            }
                        )}
                    >
                        {icon && (
                            <div className="min-w-[27px]">
                                {typeof icon === 'string' ? (
                                    <i
                                        color={'#cccccc'}
                                        className={styles.material_icons}
                                    >
                                        {icon}
                                    </i>
                                ) : (
                                    icon
                                )}
                            </div>
                        )}
                        <div
                            style={stylesTitle}
                            className={classNames(
                                styles.item_title,
                                classTitle
                            )}
                        >
                            {title}
                        </div>
                    </div>
                </div>
            )}

            {children && (
                <div
                    onClick={(e: any) => {
                        if (
                            variant === EnumNavElementVariant.SELECTOR ||
                            variant === EnumNavElementVariant.SELECTOR_FILLED
                        ) {
                            onClickHandler(e);
                        }
                    }}
                    ref={ref}
                    style={hideShowAreaStyles}
                    className={cn(styles.hide_show_area, classHideShowArea, {
                        [styles.collapse]: !isOpen,
                        [styles.selector_absolute_area]:
                            variant === EnumNavElementVariant.SELECTOR_ABSOLUTE,
                        [styles.selector_area]:
                            variant === EnumNavElementVariant.SELECTOR ||
                            variant === EnumNavElementVariant.SELECTOR_FILLED,
                        [styles.no_border_area]:
                            variant === EnumNavElementVariant.NO_BORDER,
                        [styles.absolute_area]:
                            variant === EnumNavElementVariant.ABSOLUTE,
                        [styles.selector_area_filled]:
                            variant === EnumNavElementVariant.SELECTOR_FILLED,
                    })}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default NavElement;
