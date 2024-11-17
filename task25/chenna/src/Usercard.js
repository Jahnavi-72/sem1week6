import React from 'react'
import PropTypes from 'prop-types';
import './Usercard.css';

const Usercard = ({name,email}) => {
  return (
    <div className='user-card'>
        <h3 className='user-name'>{name}</h3>
        <p className='user-email'>{email}</p>

    </div>
  )
}

Usercard.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
};

export default Usercard;