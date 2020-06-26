import React from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import SocialInteractionTable from './SocialInteractionTable';

const SocialInteractionContainer: React.FC = () => {
  return (
    <div className='admin__main social-int'>
      <h1>Social Interaction List</h1>
      <div className='float-right mb-2'>
        <FormCheck label='Display records within last 14 days' />
      </div>
      <SocialInteractionTable />
      <div className='social-int__actions'>
        <Button>Add Social Interaction</Button>
      </div>
    </div>
  );
};

export default SocialInteractionContainer;
