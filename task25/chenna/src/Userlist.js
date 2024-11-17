import React from 'react';
import Usercard from './Usercard';
import './Userlist.css';

const Userlist = () => {
    const users=[ 
        { id:1,name:"Jahnavi",email:"jahnavi@200512"},
        { id:1,name:"Chenna",email:"Chenna@200512"},
        { id:1,name:"Chinny",email:"Chinny@200512"},
        { id:1,name:"Nandu",email:"Nandu@200512"},
    ]
  return (
    <div className='user-list'>
        <h2>User List</h2>
        {users.map((user)=>(
            <Usercard key={user.id} name={user.name} email={user.email}/>
        ))}

    </div>
  )
}

export default Userlist