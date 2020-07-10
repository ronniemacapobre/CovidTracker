import React, { useEffect } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import VisitedPlacesTable from '../components/visited-places/VisitedPlacesTable';
import { fetchAll } from '../store/visited-places/utils';
import { connect } from 'react-redux';

type StateProps = {
  fetchAll: () => void;
};

const VisitedPlacesPage: React.FC<StateProps> = ({ fetchAll }) => {
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div className='admin__main visited-places'>
      <h1>Visited Places List</h1>
      <div className='visited-places__controls mb-2'>
        <div className='visited-places__actions'>
          <Button
            variant='success'
            type='button'
            // onClick={() => setShowModal(true)}
          >
            Add Visited Place
          </Button>
        </div>
        <FormCheck
          label='Display records within last 14 days'
          //   defaultChecked={props.isFiltered}
          //   onChange={filterRecords}
        />
      </div>
      <VisitedPlacesTable />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchAll: () => dispatch(fetchAll()),
});

export default connect(null, mapDispatchToProps)(VisitedPlacesPage);
