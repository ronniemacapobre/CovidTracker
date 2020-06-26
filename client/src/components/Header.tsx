import React from 'react';
import { Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header className='admin__header'>
      <a href='/' className='logo'>
        <h1>CETT</h1>
      </a>
      <div className='toolbar'>COVID Exposure Tracking Tool</div>
    </header>
  );
};

export default Header;
