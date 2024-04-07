import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import AdditionalInfo from "./components/AdditionalInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/additional-info" element={<AdditionalInfo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
