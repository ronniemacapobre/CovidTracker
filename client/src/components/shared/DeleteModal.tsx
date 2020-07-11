import React from 'react';
import { Button } from 'react-bootstrap';

import ModalContainer from './ModalContainer';

type Props = {
  toggle: boolean;
  title: string;
  message: string;
  confirmAction: () => void;
  cancelAction: () => void;
};

const DeleteModal: React.FC<Props> = (props) => {
  return (
    <ModalContainer title={props.title} modalSize='sm' toggle={props.toggle}>
      <span>{props.message}</span>
      <div className='mt-3 float-right'>
        <Button
          className='mr-2'
          variant='primary'
          type='button'
          onClick={() => props.confirmAction()}
        >
          Yes
        </Button>
        <Button variant='secondary' onClick={() => props.cancelAction()}>
          No
        </Button>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
