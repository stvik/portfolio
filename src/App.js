import React, { Fragment } from 'react';
import './App.css';
import Homepage from './containers/Homepage'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <>
      <div className='background'>
        <Navbar />
        <Homepage />
      </div>
      <Aboutpage />

    </>
  )
}

export default App
