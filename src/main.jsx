import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';
import Login from "./Components/Login";
import Auth from "./Components/Auth"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} /> {/* Login Route */} 
          <Route path="auth" element={<Audio />} />
          
       
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
