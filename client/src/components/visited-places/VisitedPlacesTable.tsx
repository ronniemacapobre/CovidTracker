import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { VisitedPlace } from '../../store/visited-places/types';
import { AppState } from '../../store';
import { fetchAll } from '../../store/visited-places/utils';
import { useEffect } from 'react';

type StateProps = {
  loading: boolean;
  data: VisitedPlace[];
  getData: () => void;
};

type Props = {
  onDeleteClick: (id: string) => void;
};

const VisitedPlacesTable: React.FC<StateProps & Props> = ({
  loading,
  data,
  getData,
  onDeleteClick,
}) => {
  useEffect(() => {
    getData();
  }, [getData]);

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
                  <Button
                    variant='danger'
                    onClick={() => onDeleteClick(visitedPlace.id)}
                  >
                    Delete
                  </Button>
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

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitedPlacesTable);
