import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';
import Engine from './components/Engine';
import FooterInfos from './components/FooterInfos';
import Color from './components/Color';
import Wheels from './components/Wheels';
import Result from './components/Result';
import axios from 'axios';

import './index.css';

let hasStarted = false;
let state = 'Engine';


class App extends Component {

    render() {
        return (
            <div style={{ backgroundColor: '#F2F2F2', height: '100vh'}}>
                <NavBar />
                {hasStarted ? null : <Body />}
                {state === 'Engine' && hasStarted ? <Engine /> : null}
                {state === 'Color' && hasStarted ? <Color /> : null}
                {state === 'Wheels' && hasStarted ? <Wheels /> : null}
                {state === 'Result' && hasStarted ? <Result /> : null}
                {hasStarted ? (state === 'Result' ? null : <FooterInfos />) : null}
            </div>
        )
    }
}

export default App;