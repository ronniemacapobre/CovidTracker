import React from 'react';
import { Modal } from 'react-bootstrap';

export type ModalProps = {
  header?: React.ReactNode;
  modalSize?: 'sm' | 'lg' | 'xl';
};

type Props = {
  toggle?: boolean;
  onClose?: () => void;
};

const ModalContainer: React.FC<Props & ModalProps> = (props) => {
  return (
    <Modal show={props.toggle} onHide={props.onClose} size={props.modalSize}>
      <Modal.Header>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalContainer;
