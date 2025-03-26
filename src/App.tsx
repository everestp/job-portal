import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@mantine/core/styles.css"
import { createTheme, MantineProvider, RangeSlider, Slider } from '@mantine/core'
import Header from './Headers/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {
 
const theme = createTheme({
  colors: {
    'brightSun': [
      "#fffceb", "#fffc36", "#ffe588", "#ffd149", "#ffbd20",
      "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902"
    ],
    'mineShaft': [
      "#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888",
      "#6d6d6d", "#5d5d5d", "#4f4f4f", "#454545", "#3d3d3d", "#2d2d2d"
    ]
  }
})
  return (
  
   <MantineProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<HomePage/>}/>
    </Routes>

    </BrowserRouter>

   </MantineProvider>
  
  )
}

export default App




  
  
  

