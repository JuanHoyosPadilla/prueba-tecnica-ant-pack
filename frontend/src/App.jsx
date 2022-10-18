import { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserPages from "./pages/UserPages";
import Navigation from './components/Navegation'
import RegisterUser from "./pages/RegisterUser";
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route index element={<UserPages />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
