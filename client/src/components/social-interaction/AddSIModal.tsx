import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import ModalContainer from '../shared/ModalContainer';
import { addSI, fetchAll } from '../../store/social-interaction/action';
import { SocialInteraction } from '../../store/social-interaction/types';

type StateProps = {
  addSI: (data: SocialInteraction) => void;
  fetchAll: () => void;
};

type Props = {
  id: string;
  show: boolean;
  onHide: () => void;
};

const AddSIModal: React.FC<Props & StateProps> = (props) => {
  const initialSocialInteractionState = {
    id: '',
    name: '',
    date: new Date(),
    hours: 0,
    isSocialDistancing: false,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: value });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: checked });
  };

  const [socialInteraction, setSocialInteraction] = useState(
    initialSocialInteractionState
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addSI(socialInteraction);
    props.fetchAll();
    props.onHide();
  };

  return (
    <ModalContainer
      title='Add Social Interaction'
      modalSize='lg'
      toggle={props.show}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Name
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              required
              name='name'
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
              name='isSocialDistancing'
              label='Is Social Distancing Observed?'
              checked={socialInteraction.isSocialDistancing}
              onChange={handleCheckBoxChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='mr-3' variant='primary' type='submit'>
              Save
            </Button>
            <Button variant='secondary' onClick={props.onHide}>
              Cancel
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </ModalContainer>
  );
};

export default connect(null, { addSI, fetchAll })(AddSIModal);
