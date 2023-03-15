import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ContadorHooks from './components/ContadorHook'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import CustomHooks from './components/CustomHooks'
import References from './components/References'
import MyForms from './components/Forms'
import Style from './components/Styles'
import ComponentesEstilizados from './components/StyledComponents'

function App() {
  return (
    <div className="App">


      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>React</h1>

      <hr/><ContadorHooks/>
      <hr/><ScrollHooks/>
      <hr/><RelojHooks/>
      <hr/><AjaxHooks/>
      <hr/><CustomHooks/>
      <hr/><References/>
      <hr/><MyForms/>
      <hr/><Style/>
      <hr/><ComponentesEstilizados/>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default App
