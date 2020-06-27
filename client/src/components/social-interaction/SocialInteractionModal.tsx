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

  const handleSave = () => {
    props.onSave(new SocialInteraction(socialInteraction));
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Social Interaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm='2'>
              Name
            </Form.Label>
            <Col sm='10'>
              <Form.Control
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
            <Col sm='5'>
              <Form.Control
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
            <Col sm='3'>
              <Form.Control
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
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>Save</Button>
        <Button variant='secondary' onClick={() => props.onHide()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SocialInteractionModal;
