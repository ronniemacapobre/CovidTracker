import React, { useState, useEffect } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../store';
import {
  setSIsAction,
  setFilterAction,
} from '../store/social-interaction/action';

import { fetchAll } from '../store/social-interaction/utils';
import SocialInteractionTable from '../components/social-interaction/SocialInteractionTable';
import { SocialInteraction } from '../store/social-interaction/types';
import AddSIModal from '../components/social-interaction/AddSIModal';
import DeleteSIModal from '../components/social-interaction/DeleteSIModal';

type StateProps = {
  loading: boolean;
  data: SocialInteraction[];
  isFiltered: boolean;
  fetchAll: () => void;
  deleteSI: (id: string) => void;
};

const SocialInteractionPage: React.FC<StateProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchAll();
  }, [fetchAll]);

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
        <SocialInteractionTable socialInteractions={props.data} />
      )}

      <AddSIModal show={showModal} onHide={() => setShowModal(false)} />
      <DeleteSIModal />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  loading: state.socialInteraction.loading,
  isFiltered: state.socialInteraction.isFiltered,
  data: state.socialInteraction.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchAll: () => dispatch(fetchAll()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialInteractionPage);
