import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { SocialInteraction } from '../../store/social-interaction/types';

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
            return (
              <tr key={si.id}>
                <td>{si.name}</td>
                <td>{si.date.toLocaleDateString()}</td>
                <td>{si.hours}</td>
                <td>{si.isSocialDistancing ? 'Yes' : 'No'}</td>
                <td>
                  <Button variant='info' className='mr-2'>
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => props.onDelete(si.id)}
                    data={si}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default SocialInteractionTable;
