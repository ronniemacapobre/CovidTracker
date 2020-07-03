import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

import { SocialInteraction } from '../../store/social-interaction/types';
import { AppState } from '../../store';
import { addSI, fetchAll } from '../../store/social-interaction/action';

type StateProps = {
  addSI: (data: SocialInteraction) => void;
  fetchAll: () => void;
};

type Props = {
  show: boolean;
  onHide: () => void;
};

const SocialInteractionModal: React.FC<Props & StateProps> = (props) => {
  const initialSocialInteractionState = {
    id: '',
    name: '',
    date: new Date(),
    hours: 0,
    isSocialDistancing: false,
  };

  const [socialInteraction, setSocialInteraction] = useState(
    initialSocialInteractionState
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: value });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: checked });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addSI(socialInteraction);
    props.fetchAll();
    props.onHide();
  };

  const isValid =
    socialInteraction &&
    socialInteraction.name &&
    socialInteraction.date &&
    socialInteraction.hours;

  return (
    <Modal
      show={props.show}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Social Interaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <Button
                className='mr-1'
                variant='primary'
                type='submit'
                disabled={!isValid}
              >
                Save
              </Button>
              <Button
                className='mr-1'
                variant='secondary'
                onClick={props.onHide}
              >
                Cancel
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state: AppState) => ({
  //loading: state.socialInteraction.loading,
});

export default connect(null, { addSI, fetchAll })(SocialInteractionModal);
