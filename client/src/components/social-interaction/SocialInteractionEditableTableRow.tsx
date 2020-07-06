import React, { useState } from 'react';

import { SocialInteraction } from '../../store/social-interaction/types';
import { Button } from 'react-bootstrap';
import SocialInteractionTableRowViewMode from './SocialInteractionTableRowViewMode';
import SocialInteractionTableRowEditMode from './SocialInteractionTableRowEditMode';

type Props = {
  data: SocialInteraction;
};

const SocialInteractionEditableTableRow: React.FC<Props> = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (data: SocialInteraction) => {
    setIsEdit(true);
    console.log(data);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <>
      {isEdit ? (
        <SocialInteractionTableRowEditMode
          data={data}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <SocialInteractionTableRowViewMode
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default SocialInteractionEditableTableRow;
