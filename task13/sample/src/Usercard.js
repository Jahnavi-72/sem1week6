import React from 'react'
import './Usercard.css'

const Usercard = ({user}) => {
  return (
    <div className='Usercard'>
      <b>Name:</b>{user.name}
      <br></br>
      <b>Email:</b>{user.Email}
      </div>
  )
}

export default Usercard