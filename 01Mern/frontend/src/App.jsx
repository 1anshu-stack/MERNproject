import { useState } from 'react'
import LoginPage from './LoginPage'
import RegistrationPage from './Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/registration' element={<RegistrationPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
