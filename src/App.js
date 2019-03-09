import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';

import './index.css';

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F2F2F2', height: '100vh'}}>
                <NavBar />
                <Body />
            </div>
        )
    }
}

export default App;