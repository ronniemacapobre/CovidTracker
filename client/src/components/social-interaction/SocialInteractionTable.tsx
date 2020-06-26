import React from 'react';
import { Table } from 'react-bootstrap';

const SocialInteractionTable: React.FC = () => {
  return (
    <Table striped bordered responsive size='lg'>
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
        <tr>
          <td>Mailman</td>
          <td>6/26/2020</td>
          <td>10</td>
          <td>Yes</td>
          <td>Edit Delete</td>
        </tr>
        <tr>
          <td>Mailman</td>
          <td>6/26/2020</td>
          <td>10</td>
          <td>Yes</td>
          <td>Edit Delete</td>
        </tr>
        <tr>
          <td>Mailman</td>
          <td>6/26/2020</td>
          <td>10</td>
          <td>Yes</td>
          <td>Edit Delete</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SocialInteractionTable;
