import { Dialog } from '@headlessui/react';
import { FC } from 'react';
import { Button } from '..';
import Modal from '../Modal/Modal';
import styles from './ConfirmationModal.module.scss';

interface Props {
    open: boolean;
    title: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: FC<Props> = ({ open, title, description, onClose, onConfirm }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>

            <div className={styles.actions}>
                <Button variant="textDark" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Yes
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
