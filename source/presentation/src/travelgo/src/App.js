import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	componentDidMount(){
		console.log('qui lanciare la action di init ?')
		/**
		 * ci saraà poi un midleware che intercetta la chiamata init e faraà la fetch per inizializzare la travelList
		 */
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to TravelGO</h1>
				</header>
				<p className="App-intro">
					Think about travel... everything, everywhere, every days... and GO
				</p>
			</div>
		);
	}
}

export default App;
