import React from 'react';
import { Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header className='admin__header'>
      <a href='/' className='logo'>
        <h1>CETT</h1>
      </a>
      <div className='toolbar'>
        <h1>COVID Exposure Tracking Tool</h1>
      </div>
    </header>
  );
};

export default Header;
