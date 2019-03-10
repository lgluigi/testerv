import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';
import Engine from './components/Engine';
import FooterInfos from './components/FooterInfos';
import Color from './components/Color';

import './index.css';

let hasStarted = true;
let state = 'color';

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#F2F2F2', height: '100vh'}}>
                <NavBar />
                {hasStarted ? null : <Body />}
                {state === 'Engine'? <Engine /> : null}
                {state === 'color' ? <Color /> : null}
                {hasStarted ? <FooterInfos /> : null}
            </div>
        )
    }
}

export default App;