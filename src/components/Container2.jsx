import { useState } from 'react'
import Catalog from './Catalog'
import Filter from './Filter'
import './Container2.css'
import { ArrowRight } from 'react-bootstrap-icons'

function Container2() {
  const [count, setCount] = useState(0)

  return (
	<div className='container col center'>
		<a href="/services"><h1>Get a FREE logo for your Business<ArrowRight/></h1></a>
		<h1 className='featured_title'>Featured Work</h1>
		<div id="catalog" className='row container center'>
			<Catalog />
		</div>
	</div>
  )
}

export default Container2