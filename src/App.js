import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';
import Engine from './components/Engine';
import FooterInfos from './components/FooterInfos';

import './index.css';

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F2F2F2', height: '100vh'}}>
                <NavBar />
                <Engine />
                <FooterInfos />
            </div>
        )
    }
}

export default App;