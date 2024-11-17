import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'


const App = () => {
  return (
    <div>
      <Header/>
      <div style={{display:'flex'}}>
      <Sidebar/>
      <p>-This is main content</p>
      </div>
      <Footer/>
    </div>
  )
}

export default App