import React, { useState, useEffect } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../../store';
import {
  setSIsAction,
  setFilterAction,
  deleteSIAction,
} from '../../store/social-interaction/action';

import { fetchAll } from '../../store/social-interaction/utils';
import SocialInteractionTable from './SocialInteractionTable';
import { SocialInteraction } from '../../store/social-interaction/types';
import AddSIModal from './AddSIModal';
import DeleteSIModal from './DeleteSIModal';

type StateProps = {
  loading: boolean;
  data: SocialInteraction[];
  isFiltered: boolean;
  fetchAll: () => void;
  deleteSI: (id: string) => void;
};

const SocialInteractionContainer: React.FC<StateProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchAll();
  }, [fetchAll]);

  const onShowDeleteModal = (id: string) => {
    setShowDeleteModal(true);
    // SocialInteractionService.remove(id).then(() => {
    //   const copy = socialInteractions.filter((si) => si.id !== id);
    //   setSocialInteractions([...copy]);
    // });
  };

  const filterRecords = () => {
    dispatch(setFilterAction());

    if (!props.isFiltered) {
      dispatch(setSIsAction(props.data));
    } else {
      props.fetchAll();
    }
  };

  return (
    <div className='admin__main social-int'>
      <h1>Social Interaction List</h1>
      <div className='social-int__controls mb-2'>
        <div className='social-int__actions'>
          <Button
            variant='success'
            type='button'
            onClick={() => setShowModal(true)}
          >
            Add Social Interaction
          </Button>
        </div>
        <FormCheck
          label='Display records within last 14 days'
          defaultChecked={props.isFiltered}
          onChange={filterRecords}
        />
      </div>
      {props.loading ? (
        <span className='text-center'>Loading...</span>
      ) : (
        <SocialInteractionTable
          socialInteractions={props.data}
          onDelete={onShowDeleteModal}
        />
      )}

      <AddSIModal show={showModal} onHide={() => setShowModal(false)} />
      <DeleteSIModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  loading: state.socialInteraction.loading,
  isFiltered: state.socialInteraction.isFiltered,
  data: state.socialInteraction.data,
});

export default connect(mapStateToProps, { fetchAll })(
  SocialInteractionContainer
);
