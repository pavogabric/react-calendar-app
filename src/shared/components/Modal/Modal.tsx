import { Dialog } from '@headlessui/react';
import { FC } from 'react';
import styles from './Modal.module.scss';

interface Props extends React.PropsWithChildren {
    open: boolean;
    onClose: () => void;
}

const Modal: FC<Props> = ({ open, children, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} className={styles.modal}>
            <div className={styles.overlay}>
                <Dialog.Panel className={styles.panel}>{children}</Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default Modal;
