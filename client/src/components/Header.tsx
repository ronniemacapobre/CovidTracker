import React from 'react';
import { Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header className='admin__header'>
      <a href='/' className='logo '>
        <span>
          <i className='far fa-user-circle fa-2x'></i>
        </span>
      </a>
      <div className='toolbar'>
        <h1>
          C<i className='fas fa-virus fa-sm'></i>VID Exposure Tracking Tool
        </h1>
      </div>
    </header>
  );
};

export default Header;
