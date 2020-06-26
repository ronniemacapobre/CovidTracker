import React, { useState, useContext, useEffect } from 'react';
import { Button, FormCheck, Form } from 'react-bootstrap';
import axios from 'axios';

import SocialInteractionTable from './SocialInteractionTable';
import SocialInteractionModal from './SocialInteractionModal';

const SocialInteractionContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const socialInteractionUrl =
      'http://localhost:5000/api/social-interactions';
    axios.get(socialInteractionUrl).then((data) => {
      console.log(data);
    });
  });

  return (
    <div className='admin__main social-int'>
      <h1>Social Interaction List</h1>
      <div className='social-int__controls mb-2'>
        <div className='social-int__actions'>
          <Button onClick={() => setShowModal(true)}>
            Add Social Interaction
          </Button>
        </div>
        <FormCheck label='Display records within last 14 days' />
      </div>
      <SocialInteractionTable />
      <SocialInteractionModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default SocialInteractionContainer;
