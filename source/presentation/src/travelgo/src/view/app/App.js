import React, { Component } from 'react';
import TravelWidget from '../travelWidget/containers/TravelWidget';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to TravelGO</h1>
				</header>
				<TravelWidget />
			</div>
		);
	}
}

export default App;
