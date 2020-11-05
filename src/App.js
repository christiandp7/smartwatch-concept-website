import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import OffCanvasMenu from './components/OffCanvasMenu'
import Main from './components/Main'

import Scrollbar from 'react-custom-scrollbars'

function App() {

  const [ocMenuVisibility, setOCMenuVisibility] = useState(false);


  const toggleMenu = () => {
    setOCMenuVisibility(!ocMenuVisibility);
  }


  return (
    <Scrollbar style={{ width: '100vw', height: '100vh' }}>
      <Header toggleMenu={toggleMenu} />
      <Main />
      

      <OffCanvasMenu toggleMenu={toggleMenu} ocMenu={ocMenuVisibility} />
    </Scrollbar>   
  )
}

export default App
