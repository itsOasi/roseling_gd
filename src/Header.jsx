import { useState } from 'react'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div className='header'>
			<img className='logo' src="./src/assets/logo_full_22_12_6.png"></img>
			<div className='row'>
				<a>Merch</a>
				<a>About</a>
				<a>Contact Us</a>
			</div>
		</div>
    </>
  )
}

export default Header