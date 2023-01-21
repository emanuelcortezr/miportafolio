import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProyectBreakCoffee from './Components/ProyectBreakCoffee';
import ProyectZulnailsArtist from './Components/ProyectZulnailsArtist';
import ProyectDakota from './Components/ProyectDakota';
import AboutMe from './Components/AboutMe';
import ProyectRandM from './Components/ProyectRandM';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/breakcoffee" element={<ProyectBreakCoffee />} />
      <Route path="/zulnailsartist" element={<ProyectZulnailsArtist />} />
      <Route path="/dakota" element={<ProyectDakota />} />
      <Route path="/randm" element={<ProyectRandM />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
