import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App