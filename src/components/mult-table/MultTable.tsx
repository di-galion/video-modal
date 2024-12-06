import { FC, useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import { MultTableRow } from './components/MultTableRow';
import { generateRandomNumberFillArray } from '../../utils';
import { useSyncStorage } from '../../api/socket/useSyncStorage';

export type MultTableItem = number | [number, number];

export type MultTableItemsType = 'OneDigit' | 'TwoDigits';

interface MultTableProps {
    name: string;
    disabled?: boolean;
    operation?: '+' | '-' | '*' | '/';
    itemsType: MultTableItemsType;
}

export const MultTable: FC<MultTableProps> = ({
    itemsType,
    name,
    disabled,
    operation = '+',
}) => {
    const operMap: Record<string, (a: number, b: number) => number> = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const { updateStorage, ...storageData } = useSyncStorage();

    const multTableItems = useMemo<number[]>(() => {
        return storageData[name];
    }, [storageData]);

    useEffect(() => {
        switch (itemsType) {
            case 'OneDigit':
                updateStorage({
                    [name]: generateRandomNumberFillArray(1, 10),
                });
                break;
            case 'TwoDigits':
                updateStorage({
                    [name]: generateRandomNumberFillArray(11, 80).slice(0, 10),
                });
                break;
        }
    }, [itemsType]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <div className={styles.table__content}>
                    {multTableItems &&
                        multTableItems.map((numbers, index) => {
                            const nums: [number, number] =
                                /*Array.isArray(numbers)
                            ? numbers
                            :*/ [numbers, numbers];

                            return (
                                <MultTableRow
                                    key={`${name}${index}`}
                                    panel={name}
                                    index={index}
                                    title={`${nums[0]}${operation}${nums[1]}=`}
                                    answer={operMap[operation](...nums)}
                                    maxLength={`${nums[0]}${nums[1]}`.length}
                                    disabled={disabled}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
