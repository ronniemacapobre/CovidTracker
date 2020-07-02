import React from 'react';
import { Table, Button } from 'react-bootstrap';
import SocialInteraction from '../../assets/models/SocialInteraction';

type Props = {
  socialInteractions: SocialInteraction[] | null;
  showAll: boolean;
  days: number;
  onDelete: (id: string) => void;
};

const SocialInteractionTable: React.FC<Props> = (props) => {
  let date = new Date();
  date.setDate(date.getDate() - props.days);

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
          props.socialInteractions
            .sort((a, b) => (a.date >= b.date ? -1 : 1))
            .filter((si) => {
              return props.showAll ? true : si.date >= date;
            })
            .map((si) => {
              return (
                <tr key={si.id}>
                  <td>{si.name}</td>
                  <td>{si.date}</td>
                  <td>{si.hours}</td>
                  <td>{si.isSocialDistancing ? 'Yes' : 'No'}</td>
                  <td>
                    <Button variant='success' className='mr-2'>
                      Edit
                    </Button>
                    <Button
                      variant='danger'
                      onClick={() => props.onDelete(si.id)}
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
