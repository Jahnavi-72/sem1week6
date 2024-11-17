import React,{useState} from 'react'

const App = () => {
  const [name,setname] = useState("Web plus Academy");
  return (
    <div>Welcome to {name} </div>
  )
}

export default App