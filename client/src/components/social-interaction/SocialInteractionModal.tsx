import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

const SocialInteractionModal: React.FC<Props> = (props) => {
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
              <Form.Control type='text' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm='2'>
              Date
            </Form.Label>
            <Col sm='5'>
              <Form.Control type='date' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm='2'>
              Hours
            </Form.Label>
            <Col sm='3'>
              <Form.Control type='number' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formHorizontalCheck'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label='Is Social Distancing Observed?' />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.onHide()}>Save</Button>
        <Button variant='secondary' onClick={() => props.onHide()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SocialInteractionModal;
