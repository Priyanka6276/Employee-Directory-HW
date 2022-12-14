import "./App.css";

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
// import Employee from "./pages/Employee"
import SectionEmployee from "./components/SectionEmployee";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/:id" element={<SectionEmployee />} />
      </Routes>
    </div>
  );
}