


class TextRenderLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}

	onChangeValue = (event) => {
		const {onChange} = this.props;
		this.setState({value: event.currentTarget.value})
		onChange(event.currentTarget.value)
	}
	
	render() {
		const {value} = this.state;
		return (
			<div className="type-text">
				<textarea value={value} onChange={this.onChangeValue} name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки"></textarea>
			</div>
		);
	}
}


