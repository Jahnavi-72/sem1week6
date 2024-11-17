import React from 'react'
import Usercard from './Usercard'

const App = () => {
  let user1={
    name:"Jahnavi",
    Email:"jahnavi@200512"
  }
  let user2={
    name:"Chenna",
    Email:"Chenna@200512"
  }

  return (
    <div>
      <Usercard user={user1}/>
      <Usercard user={user2}/>
    </div>
  )
}

export default App