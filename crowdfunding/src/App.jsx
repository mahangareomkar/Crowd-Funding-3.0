import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components';
import { Home, Campaign, CreateCampaign, MyCampaigns, } from './pages'

function App() {

  return (
    <Router>
      <div className='text-slate-300'>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='campaigns/:id' element={<Campaign />}></Route>
          <Route path='create_campaign' element={<CreateCampaign />}></Route>
          <Route path='my-campaigns' element={<MyCampaigns />}></Route>
        </Routes>
        <footer className='bg-slate-950 flex justify-center items-center'>
          <p className='text-xl text-white font-mono font-semibold py-4'>Developed By Devil ( Omkar ) </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
