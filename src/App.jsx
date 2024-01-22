import { useState } from 'react'
import './App.css'
import Header from './Header'
import Container1 from './Container1'
import Container2 from './Container2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Header />
		<Container1 />
		<Container2 />
    </>
  )
}

export default App
