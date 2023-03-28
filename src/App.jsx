import React from 'react'
import CreateComponents from "./Components/AiShareText/CreateComponents"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReaderComponents from './Components/AiShareText/ReaderComponents'
import Home from './Components/Home/Home'
import Weather from './Components/WeatherApplication/Weather'
import Youtube from './Components/Youtube/Youtube'


function App() {
  return (<div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/aitxt/' element={<CreateComponents />} />
        <Route exact path='/aitxt/:urlCode' element={<ReaderComponents />} />
        <Route exact path='/weather-app' element={<Weather />} />
        <Route exact path='/youtube' element={<Youtube />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App