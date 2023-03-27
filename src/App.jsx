import React from 'react'
import CreateComponents from "./Components/AiShareText/CreateComponents"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReaderComponents from './Components/AiShareText/ReaderComponents'

function App() {
  return (<div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<CreateComponents />} />
        <Route exact path='/:urlCode' element={<ReaderComponents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App