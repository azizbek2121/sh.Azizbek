import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProduct from './Pages/allProduct/AllProduct'
import CreateProduct from './Pages/createProduct/CreateProduct'
import FirstLogin from './Pages/firstLogin/FirstLogin'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import KartAll from './Pages/kartAll/KartAll'
import { useState } from 'react'

const App = () => {
  const [azizbek, setAzizbek] = useState('')
  return (
    <div className='all'>
      <Router className='d-flex'>
        <Sidebar/>
        <div>
        <Header azizbek={azizbek}/>
        <Routes>
          <Route path='/'element={<AllProduct/>}/>
          <Route path='createProduct'element={<CreateProduct/>}/>
          <Route path='firstLogin'element={<FirstLogin setAzizbek={setAzizbek} />}/>
          <Route path='kartAll'element={<KartAll/>}/>
        </Routes>
        </div>        

      </Router>
    </div>
  )
}

export default App