import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TravelCard from './view/travelWidget/components/TravelCard'

class App extends Component {

    /*
	componentDidMount(){
		console.log('qui lanciare la action di init ?')
		
		// ci sara' poi un midleware che intercetta la chiamata init e farà la fetch per inizializzare la travelList
		 
    }
    */

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to TravelGO</h1>
				</header>
				<TravelCard id={1} destination='Roma' note='note roma' departureDate={200} returnDate={300}/>
			</div>
		);
	}
}

export default App;
