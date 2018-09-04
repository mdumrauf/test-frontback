import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import sectors from './sectors';

class App extends Component {

    constructor(props) {
        super(props);
        this.renderSector = this.renderSector.bind(this);
    }

    renderSector(sector) {
        return (
            <ul>
                <li key={sector.id}>{sector.name}</li>
                {
                    sector.items && sector.items.map(item => this.renderSector(item))
                }
            </ul>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    {
                        sectors.map(sector => this.renderSector(sector))
                    }
                </div>
            </div>
        );
    }
}

export default App;
