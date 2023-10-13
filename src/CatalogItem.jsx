function CatalogItem(props) {
	let styles = {
		backgroundImage: "url("+props.src+")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}
	return (
		<>
			<a className='catalog_item'
					style={styles}
					href={props.src}>
				<div className='desc'>
				<h2>{props.name}</h2>
				<p>{props.desc}</p>
				</div>
				
			</a>
		</>
	)
}

export default CatalogItem