import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import InteractionProvider from './components/InteractionProvider'
import ScreenSizeProvider from './components/ScreenSizeProvider'

import Main from './pages/main'
import PosterModal from './pages/PosterModal'
import Screen from './pages/screen'
import Screen_smartpohone from './pages/screen_smartphone'
import './App.css'


function App() {

  return (
    <>
  <InteractionProvider>
    <ScreenSizeProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/poster" element={<PosterModal />}/>      
          <Route path="/screen" element={<Screen />}/>  
        </Route>
        <Route path="/screen_sm" element={<Screen_smartpohone />} />
      </Routes>
    </ScreenSizeProvider>
  </InteractionProvider>
    </>
  )
}

export default App
