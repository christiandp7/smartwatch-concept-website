import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import OffCanvasMenu from './components/OffCanvasMenu'

function App() {

  const [ocMenuVisibility, setOCMenuVisibility] = useState(false);


  const toggleMenu = () => {
    setOCMenuVisibility(!ocMenuVisibility);
  }


  return (
    <Fragment>
      <Header toggleMenu={toggleMenu} />
      <OffCanvasMenu toggleMenu={toggleMenu} ocMenu={ocMenuVisibility} />
    </Fragment>   
  )
}

export default App
