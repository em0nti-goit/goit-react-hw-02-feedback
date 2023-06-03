import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Notification({ message }) {
  return <Alert variant="info" className='w-50'>{message}</Alert>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
