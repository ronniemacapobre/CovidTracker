import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import ModalContainer from '../shared/ModalContainer';
import { fetchAll, addVisitedPlace } from '../../store/visited-places/utils';
import { connect } from 'react-redux';
import { VisitedPlace } from '../../store/visited-places/types';

type StateProps = {
  getData: (isFiltered: boolean) => void;
  addVisitedPlace: (visitedPlace: VisitedPlace) => void;
};

type Props = {
  show: boolean;
  isFiltered: boolean;
  onHide: () => void;
};

const AddVisitedPlaceModal: React.FC<StateProps & Props> = ({
  show,
  isFiltered,
  onHide,
  getData,
  addVisitedPlace,
}) => {
  const initialVisitedPlace = {
    id: '',
    place: '',
    date: new Date(),
    hours: 0,
    isCrowded: false,
  };
  const [visitedPlace, setVisitedPlace] = useState(initialVisitedPlace);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setVisitedPlace({ ...visitedPlace, [name]: value });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setVisitedPlace({ ...visitedPlace, [name]: checked });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addVisitedPlace(visitedPlace);
    getData(isFiltered);
    onHide();
  };

  return (
    <ModalContainer title='Add Visited Place' modalSize='lg' toggle={show}>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Place
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              required
              name='place'
              type='text'
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Date
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              required
              name='date'
              type='date'
              max={new Date().toISOString().substr(0, 10)}
              defaultValue={new Date().toISOString().substr(0, 10)}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Hours
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              required
              name='hours'
              type='number'
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalCheck'>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name='isCrowded'
              label='Is crowded?'
              checked={visitedPlace.isCrowded}
              onChange={handleCheckBoxChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='mr-3' variant='primary' type='submit'>
              <i className='far fa-save'></i> Save
            </Button>
            <Button variant='secondary' onClick={onHide}>
              <i className='fas fa-ban'></i> Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </ModalContainer>
  );
};

const mapDisptachToProps = (dispatch: any) => ({
  getData: (isFiltered: boolean) => dispatch(fetchAll(isFiltered)),
  addVisitedPlace: (visitedPlace: VisitedPlace) =>
    dispatch(addVisitedPlace(visitedPlace)),
});

export default connect(null, mapDisptachToProps)(AddVisitedPlaceModal);
