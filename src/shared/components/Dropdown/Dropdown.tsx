import { Listbox } from '@headlessui/react';
import styles from './Dropdown.module.scss';

interface Props<T> {
    value: T;
    options: { label: string; value: T }[];
    onChange: (value: T) => void;
}

const Dropdown = function <T extends string | number>({ value, options, onChange }: Props<T>) {
    return (
        <Listbox as="div" className={styles.dropdownContainer} value={value} onChange={onChange}>
            <Listbox.Label className={styles.label}>Select time range:</Listbox.Label>
            <Listbox.Button className={styles.dropdown}>{value}</Listbox.Button>
            <Listbox.Options className={styles.options}>
                {options.map(({ value, label }) => (
                    <Listbox.Option className={styles.optionsItem} key={value} value={value}>
                        {label}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};

export default Dropdown;
