import React from 'react'
import { Routes, Route } from 'react-router-dom';

import * as Pages from './Pages'
import { NavBar } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './components/NavBar/navbar.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path="/register" element={<Pages.Register />} />
          <Route path="/dashboard" element={<Pages.Dashboard />} />
          <Route path='*' element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
