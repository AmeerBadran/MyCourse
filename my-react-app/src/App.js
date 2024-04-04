import Home from "./Pages/Home/Home.js";
import Services from "./Pages/Services/Services.js";
import TransportationService from "./Pages/SingleService/TransportService.js";
import SignUp from "./Pages/Auth/SignUp.js";
import LogIn from "./Pages/Auth/LogIn.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transport" element={<TransportationService />} />
        </Routes>
      </BrowserRouter>
    </div>);
}