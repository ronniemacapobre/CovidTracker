import React from 'react';
import { Table } from 'react-bootstrap';
import { SocialInteraction } from '../../store/social-interaction/types';
import SocialInteractionEditableTableRow from './SocialInteractionEditableTableRow';

type Props = {
  socialInteractions: SocialInteraction[] | null;
};

const SocialInteractionTable: React.FC<Props> = (props) => {
  return (
    <Table bordered responsive size='lg'>
      <thead>
        <tr>
          <th>
            <i className='far fa-user'></i> Person
          </th>
          <th>
            <i className='far fa-calendar-alt'></i> Date
          </th>
          <th style={{ width: '100px' }}>
            <i className='fas fa-hourglass-half'></i> Hours
          </th>
          <th style={{ width: '200px' }}>
            <i className='fas fa-people-arrows'></i> Practicing SD?
          </th>
          <th style={{ width: '220px' }} className='text-center'>
            Actions
          </th>
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
