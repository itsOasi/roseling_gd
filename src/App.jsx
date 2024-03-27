import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Services from './pages/Services'
import Landing from './pages/Landing'
import Shop from './pages/Shop'
import DigitalStore from './pages/DigitalStore'

function App() {

  return (
    <>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route index element={<Landing/>}></Route>
				<Route path="/services" element={<Services/>}></Route>
				<Route path="/shop" element={<Shop/>}></Route>
				<Route path='/store' element={<DigitalStore/>}></Route>
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
