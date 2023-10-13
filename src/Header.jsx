import { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div className='header'>
			<img className='logo' src="./logo_full_22_12_6.png"></img>
			<div className='nav row'>
				<a href='https://instagram.com/roseling_gd?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
					<Icons.Instagram className='icon' />
				</a>
			</div>
		</div>
    </>
  )
}

export default Header
