import React from 'react';
import { Table } from 'react-bootstrap';
import { SocialInteraction } from '../../store/social-interaction/types';
import SocialInteractionEditableTableRow from './SocialInteractionEditableTableRow';

type Props = {
  socialInteractions: SocialInteraction[] | null;
  onDelete: (id: string) => void;
};

const SocialInteractionTable: React.FC<Props> = (props) => {
  return (
    <Table bordered responsive size='lg'>
      <thead>
        <tr>
          <th>Person</th>
          <th>Date</th>
          <th>Hours</th>
          <th>Is Practicing SD?</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.socialInteractions &&
          props.socialInteractions.map((si) => {
            return <SocialInteractionEditableTableRow key={si.id} data={si} />;
          })}
      </tbody>
    </Table>
  );
};

export default SocialInteractionTable;
