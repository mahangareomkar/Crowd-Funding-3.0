import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components';
import { Home, Campaign, CreateCampaign, } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='text-slate-300'>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='campaigns' element={<Campaign />}></Route>
          <Route path='create_campaign' element={<CreateCampaign />}></Route>
          {/* <Route path='profile' element={<Profile />}></Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
