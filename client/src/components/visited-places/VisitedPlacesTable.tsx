import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { VisitedPlace } from '../../store/visited-places/types';
import { AppState } from '../../store';

type StateProps = {
  loading: boolean;
  data: VisitedPlace[];
};

const VisitedPlacesTable: React.FC<StateProps> = ({ loading, data }) => {
  return loading ? (
    <span>Loading data...</span>
  ) : (
    <Table bordered responsive size='lg'>
      <thead>
        <tr>
          <th>Place</th>
          <th>Date</th>
          <th>Hours</th>
          <th>Crowded?</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((visitedPlace) => {
            return (
              <tr
                key={visitedPlace.id}
                className={visitedPlace.isCrowded ? 'pum' : ''}
              >
                <td>{visitedPlace.place}</td>
                <td>{visitedPlace.date.toLocaleDateString()}</td>
                <td>{visitedPlace.hours}</td>
                <td>{visitedPlace.isCrowded ? 'Yes' : 'No'}</td>
                <td>
                  <Button variant='info' className='mr-2'>
                    Edit
                  </Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state: AppState) => ({
  loading: state.visitedPlace.loading,
  data: state.visitedPlace.data,
});

export default connect(mapStateToProps)(VisitedPlacesTable);
