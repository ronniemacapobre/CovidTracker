import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import SocialInteraction from '../../assets/models/SocialInteraction';

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (data: SocialInteraction) => void;
};

const SocialInteractionModal: React.FC<Props> = (props) => {
  const initialSocialInteractionState = {
    _id: 0,
    name: '',
    date: null,
    hours: '',
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
    props.onSave(new SocialInteraction(socialInteraction));
  };

  const isValid =
    socialInteraction &&
    socialInteraction.name &&
    socialInteraction.date &&
    socialInteraction.hours;

  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
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

export default SocialInteractionModal;
