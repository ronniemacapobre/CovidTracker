import React, { useState, useEffect } from 'react';
import { Button, FormCheck } from 'react-bootstrap';

import SocialInteractionTable from './SocialInteractionTable';
import SocialInteractionModal from './SocialInteractionModal';
import SocialInteraction from '../../assets/models/SocialInteraction';
import SocialInteractionService from '../services/SocialInteractionService';

const SocialInteractionContainer: React.FC = () => {
  const days: number = 14;
  const [showModal, setShowModal] = useState(false);
  const [showAllRecords, setShowAllRecords] = useState(true);
  const [socialInteractions, setSocialInteractions] = useState<
    SocialInteraction[]
  >([]);

  useEffect(() => {
    getSocialInteractions();
  }, []);

  const getSocialInteractions = () => {
    SocialInteractionService.getAll()
      .then((response) => {
        setSocialInteractions(
          response.data.map((sc: any) => new SocialInteraction(sc))
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addNewSocialInteraction = (data: SocialInteraction) => {
    SocialInteractionService.add(data).then(() => {
      setShowModal(false);
      setSocialInteractions([...socialInteractions, data]);
    });
  };

  const handleShowAllRecords = () => {
    setShowAllRecords(!showAllRecords);
  };

  return (
    <div className='admin__main social-int'>
      <h1>Social Interaction List</h1>
      <div className='social-int__controls mb-2'>
        <div className='social-int__actions'>
          <Button onClick={() => setShowModal(true)}>
            Add Social Interaction
          </Button>
        </div>
        <FormCheck
          label='Display records within last 14 days'
          defaultChecked={!showAllRecords}
          onChange={handleShowAllRecords}
        />
      </div>
      <SocialInteractionTable
        socialInteractions={socialInteractions}
        showAll={showAllRecords}
        days={days}
      />
      <SocialInteractionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={addNewSocialInteraction}
      />
    </div>
  );
};

export default SocialInteractionContainer;
