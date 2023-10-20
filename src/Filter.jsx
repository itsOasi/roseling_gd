import Button from "./Button"

function Filter() {
	let filters = ["Art", "Music", "3D"] 
  
	return (
		<div id='filter' className="col">
			{filters.map(filter => <p key={filter} className="filter_item">{filter}</p>)}
		</div>
	)
  }

export default Filter