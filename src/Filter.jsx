function Filter() {
	let filters = ["Art", "Music", "3D"] 
  
	return (
		<div id='filter' className="col">
			{filters.map(filter => <p key={filter}>{filter}</p>)}
		</div>
	)
  }

export default Filter