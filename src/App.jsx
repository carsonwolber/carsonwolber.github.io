import './App.css'
import Navbar from './Navbar'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navigate replace to={'/about'} />
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
