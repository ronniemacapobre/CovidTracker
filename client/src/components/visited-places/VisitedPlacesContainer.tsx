import React from 'react';
import { Button, FormCheck } from 'react-bootstrap';

const VisitedPlacesContainer: React.FC = () => {
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
    </div>
  );
};

export default VisitedPlacesContainer;
