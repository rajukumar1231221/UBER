import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import UserLogin from "./Components/pages/UserLogin";
import UserSignup from "./Components/pages/UserSignup";
import CaptainSignup from "./Components/pages/CaptainSignup";
import CaptainLogin from "./Components/pages/CaptainLogin";
import './App.css';
import Start from "./Components/pages/Start";
import UserLogout from "./Components/pages/UserLogout";
import CaptainHome from "./Components/pages/Captainhome";
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/user/logout" element={<UserLogout />} />
      <Route path="/captain-home" element={<CaptainHome />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App