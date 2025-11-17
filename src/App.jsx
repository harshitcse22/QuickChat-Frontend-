import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Profilepage from './pages/Profilepage'
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] 
       bg-contain">
        <Toaster/>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/profile' element={<Profilepage/>}/>
       </Routes>
    </div>
  )
}

export default App
 