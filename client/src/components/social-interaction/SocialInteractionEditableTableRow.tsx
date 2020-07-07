import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SocialInteraction } from '../../store/social-interaction/types';
import SocialInteractionTableRowViewMode from './SocialInteractionTableRowViewMode';
import SocialInteractionTableRowEditMode from './SocialInteractionTableRowEditMode';
import { toggleDeleteSIAction } from '../../store/social-interaction/action';

type StateProps = {
  beginDelete: (id: string) => void;
};

type Props = {
  data: SocialInteraction;
};

const SocialInteractionEditableTableRow: React.FC<StateProps & Props> = ({
  data,
  beginDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleBeginEdit = (data: SocialInteraction) => {
    setIsEdit(true);
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
          onEdit={handleBeginEdit}
          onDelete={() => beginDelete(data.id)}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  beginDelete: (id: string) => dispatch(toggleDeleteSIAction(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(SocialInteractionEditableTableRow);
