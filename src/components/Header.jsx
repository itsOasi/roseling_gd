import { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import Button from './Button'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div id='header'>
			<a href="/">
			{window.innerWidth < 800 ? <img className='logo' src="./light.png" classes="social"></img> : <img className='logo' src="./light.png"></img> }

			</a>
			
			<div className='nav row'>
				<Button href='https://instagram.com/roseling_gd?igshid=OGQ5ZDc2ODk2ZA==' msg={<Icons.Instagram className='icon' />}></Button>
				<Button action="true" href="/services" msg="Services"></Button>
				<Button action="true" href="/shop" msg="Shop"></Button>
			</div>
		</div>
    </>
  )
}

export default Header
