function Filter() {
	let filters = ["Trending", "Free Stuff", "Art Assets", "Music Samples", "3D Models"] 
  
	return (
		<div id='filter'>
			<h2><b>Filter</b></h2>
			<div>
				{filters.map(filter => <p key={filter}>{filter}</p>)}
			</div>
		</div>
	)
  }

export default Filter