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
				<img class="cover_image" src="src/assets/0da0092814516ed2ab475ec6b6b40dc5.jpg" alt="" srcset="" />
			</a>

		</div>
	</div>)
}

export default Container1
