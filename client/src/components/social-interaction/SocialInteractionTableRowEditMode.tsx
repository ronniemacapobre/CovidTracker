import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { SocialInteraction } from '../../store/social-interaction/types';
import { editSI } from '../../store/social-interaction/utils';

type StateProps = {
  editSI: (id: string, updatedSI: SocialInteraction) => void;
};

type Props = {
  data: SocialInteraction;
  onCancel: () => void;
};

const SocialInteractionTableRowEditMode: React.FC<Props & StateProps> = ({
  data,
  onCancel,
  editSI,
}) => {
  const [socialInteraction, setSocialInteraction] = useState(data);

  const handleEdit = (updatedSI: SocialInteraction) => {
    editSI(updatedSI.id, updatedSI);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: value });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setSocialInteraction({ ...socialInteraction, [name]: checked });
  };

  return (
    <tr>
      <td>
        <Form.Control
          type='text'
          onChange={handleInputChange}
          name='name'
          value={socialInteraction.name}
        />
      </td>
      <td>
        <Form.Control
          type='date'
          name='date'
          defaultValue={new Date(socialInteraction.date)
            .toISOString()
            .substr(0, 10)}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Form.Control
          type='number'
          name='hours'
          value={socialInteraction.hours}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Form.Check
          name='isSocialDistancing'
          checked={socialInteraction.isSocialDistancing}
          onChange={handleCheckBoxChange}
        />
      </td>
      <td>
        <Button
          className='mr-1'
          variant='primary'
          type='button'
          onClick={() => handleEdit(socialInteraction)}
        >
          Update
        </Button>
        <Button variant='secondary' onClick={onCancel}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  editSI: (id: string, updatedSI: SocialInteraction) =>
    dispatch(editSI(id, updatedSI)),
});

export default connect(
  null,
  mapDispatchToProps
)(SocialInteractionTableRowEditMode);
