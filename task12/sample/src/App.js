import React from 'react'
import Button from './Button'

const App = () => {
  const handleClick1=()=>alert('primary Button Clicked')
  const handleClick2=()=>alert('Secondary Button Clicked')
  const handleClick3=()=>alert('Disabled Button Clicked')
  return (
    <div>
    <Button 
       label="Primary Button"
       onClick={handleClick1}
       style={{backgroundColor:'skyBlue',color:"black",padding:'10px 20px',margin:'10px'}}
       />

       <Button 
       label="Primary Button"
       onClick={handleClick2}
       style={{backgroundColor:'yellow',color:"black",padding:'10px 20px',margin:'10px'}}
       />

       <Button 
       label="Disabled Button"
       onClick={handleClick3}
       style={{backgroundColor:'pink',color:"white",padding:'10px 20px',margin:'10px'}}
       />
       </div>
  )
}

export default App