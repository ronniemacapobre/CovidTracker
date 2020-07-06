import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export type ModalProps = {
  title: string;
  modalSize?: 'sm' | 'lg' | 'xl';
};

type Props = {
  toggle: boolean;
};

const ModalContainer: React.FC<Props & ModalProps> = (props) => {
  const [toggle, setToggle] = useState(props.toggle);

  return (
    <Modal
      show={props.toggle}
      size={props.modalSize}
      centered
      backdrop='static'
    >
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalContainer;
