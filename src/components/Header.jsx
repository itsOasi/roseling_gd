import { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import Button from './Button'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div id='header'>
			<a href="/">
			{window.innerWidth < 800 ? <img className='logo' src="./logo_r_24_1_29.png" classes="social"></img> : <img className='logo' src="./logo_full_24_1_29.png"></img> }

			</a>
			
			<div className='nav row'>
				<Button href='https://instagram.com/roseling_gd?igshid=OGQ5ZDc2ODk2ZA==' msg={<Icons.Instagram className='icon' />}></Button>
				<Button action="true" href="/services" msg="Request a Service"></Button>
				<Button action="true" href="/shop" msg="Visit our store"></Button>
			</div>
		</div>
    </>
  )
}

export default Header
