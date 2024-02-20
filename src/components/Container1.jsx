import { useState } from 'react'
import Featured from './Featured'
import Button from './Button'
import "./Container1.css"
import { FileEarmarkTextFill, FolderFill } from 'react-bootstrap-icons'

function Container1() {
  const [count, setCount] = useState(0)

  return (
	<div>
		<div id="hero" className='row container center'>
			<div className='greeting'>
				<h1 className="title">Welcome to Roseling Graphic Design</h1>
			</div>
			<a href="/shop">
				<img class="cover_image" src="src\assets\_1cff7f32-0952-4f63-94f2-7e574d07f533.jpeg" alt="" srcset="" />
				<h3>Visit our store or...</h3>
			</a>

		</div>
	</div>)
}

export default Container1
