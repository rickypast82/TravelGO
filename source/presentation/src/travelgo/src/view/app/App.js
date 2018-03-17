import React, { Component } from 'react';
import TravelCard from '../travelWidget/components/TravelCard'

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
					<h1 className="App-title">Welcome to TravelGO</h1>
				</header>
				<TravelCard id={1} 
                    destination='Roma' 
                    note='note roma' 
                    imageSrc='Roma.jpg' />
			</div>
		);
	}
}

export default App;
