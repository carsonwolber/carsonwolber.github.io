import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Writing from './Writing';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navigate replace to={'/about'} />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
