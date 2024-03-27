import { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import Button from './Button'
import "./Header.css"

function Header() {
  const [count, setCount] = useState(0)
  const [showMenu, setShowMenu] = useState(window.innerWidth > 800)
  return (
    <>
		<div id='header'>
			<a href="/">
			{window.innerWidth < 800 ? <img className='logo' src="./light.png" classes="social"></img> : <img className='logo' src="./light.png"></img> }

			</a>
			<button onClick={function(){setShowMenu(!showMenu)}}>{showMenu ? "x":"≡"}</button>
			{showMenu ? 
			<div className='nav row'>
				<Button href='https://instagram.com/roseling_gd?igshid=OGQ5ZDc2ODk2ZA==' msg={<Icons.Instagram className='icon' />}></Button>
				<Button action="true" href="/services" msg="Services"></Button>
				<Button action="true" href="/shop" msg="Shop"></Button>
				<Button action="true" href="/store" msg="Store"></Button>
			</div>:null
			}
		</div>
    </>
  )
}

export default Header
