import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Feature from './Components/Feature'

const App = () => {
  return (
    <>
    <div className="App">
    <Navbar />
    <Header />
   <div className="something" style={{marginTop:"30%"}}>
    <Feature/>
    </div>
    </div>
    </>
  )
}

export default App