import Home from "./Pages/Home/Home.js";
import Services from "./Pages/Services/Services.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </div>);
}