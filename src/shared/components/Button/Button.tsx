import React, { FC } from 'react';
import styles from './Button.module.scss';

type BaseProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

interface Props extends BaseProps {
    variant?: 'primary' | 'secondary';
}

const Button: FC<Props> = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;
