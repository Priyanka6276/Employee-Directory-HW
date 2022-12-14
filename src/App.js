import "./App.css";

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";




export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}