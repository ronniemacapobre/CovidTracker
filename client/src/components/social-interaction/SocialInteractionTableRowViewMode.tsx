import React from 'react';

import { SocialInteraction } from '../../store/social-interaction/types';
import { Button } from 'react-bootstrap';

type Props = {
  data: SocialInteraction;
  onEdit: (data: SocialInteraction) => void;
  onDelete: (id: string) => void;
};

const SocialInteractionTableRowViewMode: React.FC<Props> = ({
  data,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className={!data.isSocialDistancing ? 'pum' : ''}>
      <td>{data.name}</td>
      <td>{new Date(data.date).toLocaleDateString()}</td>
      <td>{data.hours}</td>
      <td>{data.isSocialDistancing ? 'Yes' : 'No'}</td>
      <td>
        <Button variant='info' className='mr-2' onClick={() => onEdit(data)}>
          Edit
        </Button>
        <Button variant='danger' onClick={() => onDelete(data.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SocialInteractionTableRowViewMode;
