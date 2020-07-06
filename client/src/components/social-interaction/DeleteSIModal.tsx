import React from 'react';
import ModalContainer from '../shared/ModalContainer';
import { SocialInteraction } from '../../store/social-interaction/types';
import { Button } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

const DeleteSIModal: React.FC<Props> = (props) => {
  return (
    <ModalContainer
      title='Delete Social Interaction'
      modalSize='sm'
      toggle={props.show}
    >
      <span>Are you sure you want to delete this?</span>
      <div className='mt-3 float-right'>
        <Button className='mr-2' variant='primary' type='button'>
          Yes
        </Button>
        <Button variant='secondary' onClick={props.onHide}>
          No
        </Button>
      </div>
    </ModalContainer>
  );
};

export default DeleteSIModal;
