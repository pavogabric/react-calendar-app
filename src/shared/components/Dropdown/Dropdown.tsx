import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import styles from './Dropdown.module.scss';

interface Props<T> {
    value: T;
    options: { label: string; value: T }[];
    label: string;
    onChange: (value: T) => void;
}

const Dropdown = function <T extends string | number>({
    value,
    options,
    label,
    onChange,
}: Props<T>) {
    return (
        <Listbox as="div" className={styles.dropdownContainer} value={value} onChange={onChange}>
            <Listbox.Label className={styles.label}>{label}</Listbox.Label>
            <Listbox.Button className={styles.dropdown} data-testid="value">
                {value}
            </Listbox.Button>
            <Listbox.Options className={styles.options}>
                {options.map((option) => (
                    <Listbox.Option
                        className={classNames(styles.optionsItem, {
                            [styles.selected]: option.value === value,
                        })}
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};

export default Dropdown;
