import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className='admin__nav'>
      <ul className='menu'>
        <li className='menu__item'>
          <a className='menu__link' href='social-interaction'>
            <i className='fas fa-people-arrows mr-2'></i>
            Add Social Interaction
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='visited-places'>
            <i className='fas fa-map-pin mr-3'></i>
            Add Place Exposure
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='/'>
            <i className='fas fa-eraser mr-2'></i>
            Reset Data
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
