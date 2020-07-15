import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, FormCheck } from 'react-bootstrap';

import { AppState } from '../store';
import { fetchAll, deleteVisitedPlace } from '../store/visited-places/utils';
import VisitedPlacesTable from '../components/visited-places/VisitedPlacesTable';
import AddVisitedPlaceModal from '../components/visited-places/AddVisitedPlaceModal';
import DeleteModal from '../components/shared/DeleteModal';

type StateProps = {
  getData: (isFiltered: boolean) => void;
  deleteVisitedPlace: (id: string) => void;
};

const VisitedPlacesPage: React.FC<StateProps> = ({
  getData,
  deleteVisitedPlace,
}) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [visitedPlaceIdToDelete, setVisitedPlaceIdToDelete] = useState('');

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setIsFiltered(checked);
    getData(checked);
  };

  const handleDeleteClick = (id: string) => {
    setVisitedPlaceIdToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setVisitedPlaceIdToDelete(visitedPlaceIdToDelete);
    setShowDeleteModal(false);
    deleteVisitedPlace(visitedPlaceIdToDelete);
  };

  const cancelDelete = () => {
    setVisitedPlaceIdToDelete('');
    setShowDeleteModal(false);
  };

  return (
    <div className='admin__main visited-places'>
      <h1>Visited Places List</h1>
      <div className='visited-places__controls mb-2'>
        <div className='visited-places__actions'>
          <Button
            variant='success'
            type='button'
            onClick={() => setShowModal(true)}
          >
            <i className='fas fa-plus'></i> Add Visited Place
          </Button>
        </div>
        <FormCheck
          label='Display records within last 14 days'
          defaultChecked={isFiltered}
          onChange={handleCheckBoxChange}
        />
      </div>
      <VisitedPlacesTable onDeleteClick={handleDeleteClick} />
      <AddVisitedPlaceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        isFiltered={isFiltered}
      />
      <DeleteModal
        toggle={showDeleteModal}
        title='Delete Confirmation'
        message='Are you sure you want to delete this visited place?'
        confirmAction={confirmDelete}
        cancelAction={cancelDelete}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  getData: (isFiltered: boolean) => dispatch(fetchAll(isFiltered)),
  deleteVisitedPlace: (id: string) => dispatch(deleteVisitedPlace(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitedPlacesPage);
