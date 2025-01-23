import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import UserLogin from "./Components/pages/UserLogin";
import UserSignup from "./Components/pages/UserSignup";
import CaptainSignup from "./Components/pages/CaptainSignup";
import CaptainLogin from "./Components/pages/CaptainLogin";
import './App.css';
import UserContext from "./context/UserContext";
import Start from "./Components/pages/Start";
import UserProtectWrapper from "./Components/pages/UserProtectWrapper";
import UserLogout from "./Components/pages/UserLogout";
import CaptainContext from "./context/CaptainContext";
import CaptainHome from "./Components/pages/Captainhome";
import CaptainProtectWrapper from "./Components/pages/CaptainProtectWrapper";
const App = () => {
  return (
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={
              <UserProtectWrapper>
                <Start />
              </UserProtectWrapper>
            } />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/user/logout" element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>
            } />
            <Route path="/captain-home" element={
              <CaptainProtectWrapper>
                <CaptainHome />
              </CaptainProtectWrapper>
            } />
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/captain-signup" element={<CaptainSignup />} />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </CaptainContext>


  )
}

export default App