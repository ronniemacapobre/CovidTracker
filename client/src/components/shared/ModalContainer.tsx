import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from 'react-bootstrap';

type Props = {
  title: string;
  toggle?: boolean;
  onClose?: () => void;
};

const ModalContainer: React.FC<Props> = (props) => {
  return (
    <Modal show={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalContainer;
