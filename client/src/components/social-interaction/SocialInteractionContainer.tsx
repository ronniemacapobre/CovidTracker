import React, { useState, useEffect } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../../store';
import {
  fetchAll,
  setSIsAction,
  setFilterAction,
} from '../../store/social-interaction/action';
import SocialInteractionTable from './SocialInteractionTable';
import SocialInteractionModal from './SocialInteractionModal';
import { SocialInteraction } from '../../store/social-interaction/types';

interface Props {
  loading: boolean;
  data: SocialInteraction[];
  isFiltered: boolean;
  fetchAll: () => void;
}

const SocialInteractionContainer: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchAll();
  }, [fetchAll]);

  const deleteSocialInteraction = (id: string) => {
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
          onDelete={deleteSocialInteraction}
        />
      )}
      <SocialInteractionModal
        show={showModal}
        onHide={() => setShowModal(false)}
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
