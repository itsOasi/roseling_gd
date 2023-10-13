import { useState } from 'react'
import Catalog from './Catalog'
import Filter from './Filter'

function Container2() {
  const [count, setCount] = useState(0)

  return (
	<>
		<h1>Welcome</h1>
		<div id="catalog" className='row container'>
			<Filter />
			<Catalog />
		</div>
	</>
  )
}

export default Container2