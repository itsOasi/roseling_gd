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
				<h3>Select a Service or...</h3>
			</div>
			<div className='col container services'>
				<Button action="true" icon={<FileEarmarkTextFill />} 
					msg={"Single Document"} 
					hidden_msg={<div className='hidden_msg'>Need an editable Resume, Contract, or other Document or Form written for your business? We’ve got you covered!</div>} 
					href="https://forms.gle/32zQKzaoUiy1Mx9K9"/>
				<Button action="true" 
					icon={<FolderFill /> } 
					msg={"Document Pack"} 
					hidden_msg={<div className='hidden_msg'>Order 3 to 5 editable Documents in bulk with Matching Themes. Perfect for Branding your Business!</div>} 
					href="https://forms.gle/xMTyGRRkWJkbAecSA"/>
			</div>
			<img src="https://www.instagram.com/p/CEDWm6TnIrN/?utm_source=ig_embed" alt="" srcset="" />
		</div>
	</div>
  )
}

export default Container1