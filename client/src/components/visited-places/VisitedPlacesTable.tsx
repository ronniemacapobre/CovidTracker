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
          <th>
            <i className='fas fa-map-pin'></i> Place
          </th>
          <th>
            <i className='far fa-calendar-alt'></i> Date
          </th>
          <th style={{ width: '100px' }}>
            <i className='fas fa-hourglass-half'></i> Hours
          </th>
          <th style={{ width: '200px' }}>
            <i className='fas fa-users'></i> Crowded?
          </th>
          <th style={{ width: '220px' }} className='text-center'>
            Actions
          </th>
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
                    <i className='far fa-edit'></i> Edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => onDeleteClick(visitedPlace.id)}
                  >
                    <i className='far fa-trash-alt'></i> Delete
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
