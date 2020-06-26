import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className='admin__nav'>
      <ul className='menu'>
        <li className='menu__item'>
          <a className='menu__link' href='social-interaction'>
            Social Interaction
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            Place Exposure
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
