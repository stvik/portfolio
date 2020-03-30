import React, { Fragment } from 'react';
import './App.css';
import Homepage from './containers/Homepage'
import Navbar from './components/Navbar'
import Aboutpage from './containers/Aboutpage'
import Education from './containers/Education'
import Skills from './containers/Skills'
import 'semantic-ui-css/semantic.min.css'
import { Divider } from 'semantic-ui-react'

function App() {
  return (
    <>
      <div className='background'>
        <Navbar />
        <Homepage />
      </div>
      <Aboutpage />
      <Divider />
      <Skills />
      <Divider />
      <Education />

    </>
  )
}

export default App
