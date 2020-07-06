import React, { useState } from 'react';
import { SocialInteraction } from '../../store/social-interaction/types';
import { Form, Button } from 'react-bootstrap';

type Props = {
  data: SocialInteraction;
  onCancel: () => void;
};

const SocialInteractionTableRowEditMode: React.FC<Props> = ({
  data,
  onCancel,
}) => {
  const [socialInteraction, setSocialInteraction] = useState(data);

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
          name='name'
          value={data.name}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Form.Control
          type='date'
          name='date'
          defaultValue={data.date.toISOString().substr(0, 10)}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Form.Control
          type='number'
          name='hours'
          value={data.hours}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Form.Check
          name='isSocialDistancing'
          checked={data.isSocialDistancing}
          onChange={handleCheckBoxChange}
        />
      </td>
      <td>
        <Button className='mr-1' variant='primary' type='submit'>
          Update
        </Button>
        <Button variant='secondary' onClick={onCancel}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default SocialInteractionTableRowEditMode;
