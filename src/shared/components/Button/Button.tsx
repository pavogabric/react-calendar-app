import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Button.module.scss';

type BaseProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

interface Props extends BaseProps {
    variant: 'primary' | 'secondary' | 'textLight' | 'textDark';
}

const Button: FC<Props> = ({ children, variant, ...props }) => {
    return (
        <button
            {...props}
            className={classNames(styles.btn, {
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
                [styles.textLight]: variant === 'textLight',
                [styles.textDark]: variant === 'textDark',
            })}>
            {children}
        </button>
    );
};

export default Button;
