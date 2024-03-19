import TestPage from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route index element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </div>);
}