function CatalogItem(props) {
	let styles = {
		backgroundImage: "url("+props.src+")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}
	return (
		<>
			<div className='catalog_item'
					style={styles}>
				<div className='desc'>
				<h2>{props.name}</h2>
				<p>{props.desc}</p>
				</div>
				
			</div>
		</>
	)
}

export default CatalogItem