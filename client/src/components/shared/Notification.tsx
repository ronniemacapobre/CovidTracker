import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  icon: string;
  message: string;
};

const Notification: React.FC<Props> = ({ variant, icon, message }) => {
  return (
    <>
      <Alert className='d-flex align-items-center' variant={variant}>
        <i className={`fas ${icon} fa-2x`}></i>
        <span className='ml-2'>{message}</span>
      </Alert>
    </>
  );
};

export default Notification;
