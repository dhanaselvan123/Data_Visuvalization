import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import CsvUploader from './pages/CsvUploader';
import Chart from './pages/Chart';
import ThemeContextProvider from "./contexts/ThemeContext";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/about" exact element={<About />}></Route>
            <Route path="/settings" exact element={<Settings />}></Route>
            <Route path="/chart" exact element={<Chart />}></Route>
            <Route path="/upload" exact element={<CsvUploader />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider >
    </>
  )
};
