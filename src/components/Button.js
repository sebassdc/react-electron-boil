import React, {Component} from 'react';
import Radium from 'radium';

let styles = {
	base: {
		background: 'blue',
		color: '#fff'
	},

	red: {
		background: 'red'
	}
};

class Button extends Component {
	render() {
		return (
			<button style={[styles.base, styles[this.props.kind]]}>
			{this.props.children}
			</button>
		);
	}
}

export default Radium(Button);
