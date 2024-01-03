import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import InteractionProvider from './components/InteractionProvider'

import Main from './pages/main'
import PosterModal from './pages/PosterModal'
import Screen from './pages/screen'
import './App.css'


function App() {

  return (
    <>
  <InteractionProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/poster" element={<PosterModal />}/>      
          <Route path="/screen" element={<Screen />}/>  
        </Route>
       
      </Routes>
  </InteractionProvider>
    </>
  )
}

export default App
