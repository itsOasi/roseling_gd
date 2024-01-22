function Button(props) {
	if (props.href){ 
		return <a className={props.action?"button action":"button"} target="_blank" href={props.href}>{props.icon}{props.msg}{props.hidden_msg}</a>
	}
	else{
		return <button className={props.action?"button action":"button"} onClick={props.action}>{props.icon}{props.msg}{props.hidden_msg}</button>
	}
}

export default Button