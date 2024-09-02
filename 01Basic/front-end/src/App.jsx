import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "./LoginPage.jsx"
import RegistrationPage from "./RegistrationPage.jsx"

function App() {

  return (
    <>
      <h1>hello app</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
