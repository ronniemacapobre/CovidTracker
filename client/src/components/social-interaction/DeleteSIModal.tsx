import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import ModalContainer from '../shared/ModalContainer';
import { AppState } from '../../store';
import {
  toggleDeleteSIAction,
  deleteSIAction,
} from '../../store/social-interaction/action';
import { deleteSI } from '../../store/social-interaction/utils';

type StateProps = {
  idToDelete: string;
  toggleDeleteSI: (id: string) => void;
  onDelete: (id: string) => void;
  deleteSI: (id: string) => void;
};

const DeleteSIModal: React.FC<StateProps> = ({
  idToDelete,
  toggleDeleteSI,
  onDelete,
  deleteSI,
}) => {
  const handleDelete = (id: string) => {
    deleteSI(id);
    onDelete(id);
    toggleDeleteSI('');
  };

  return (
    <ModalContainer
      title='Delete Social Interaction'
      modalSize='sm'
      toggle={idToDelete !== ''}
    >
      <span>Are you sure you want to delete this?</span>
      <div className='mt-3 float-right'>
        <Button
          className='mr-2'
          variant='primary'
          type='button'
          onClick={() => handleDelete(idToDelete)}
        >
          Yes
        </Button>
        <Button variant='secondary' onClick={() => toggleDeleteSI('')}>
          No
        </Button>
      </div>
    </ModalContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  idToDelete: state.socialInteraction.idToDelete,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleDeleteSI: (id: string) => dispatch(toggleDeleteSIAction(id)),
  onDelete: (id: string) => dispatch(deleteSIAction(id)),
  deleteSI: (id: string) => dispatch(deleteSI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteSIModal);
