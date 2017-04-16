import React, {Component} from 'react';
import Radium from 'radium';
import Button from './components/Button';

class App extends Component {
	render() {
		return (
			<div>
				<Button>Hello</Button>
			</div>
		);
	}
}

export default Radium(App);
