import React from 'react';
import { Table } from 'react-bootstrap';
import SocialInteraction from '../../assets/models/SocialInteraction';

type Props = {
  socialInteractions: SocialInteraction[] | null;
  showAll: boolean;
  days: number;
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
            .filter((sc) => {
              return props.showAll ? true : sc.date >= date;
            })
            .map((sc) => {
              return (
                <tr key={sc.id}>
                  <td>{sc.name}</td>
                  <td>{sc.date.toLocaleDateString()}</td>
                  <td>{sc.hours}</td>
                  <td>{sc.isSocialDistancing ? 'Yes' : 'No'}</td>
                  <td>Edit Delete</td>
                </tr>
              );
            })}
      </tbody>
    </Table>
  );
};

export default SocialInteractionTable;
