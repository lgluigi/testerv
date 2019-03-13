import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';
import Engine from './components/Engine';
import FooterInfos from './components/FooterInfos';
import Color from './components/Color';
import Wheels from './components/Wheels';
import Result from './components/Result';
import * as style from './App.module.css';
import axios from 'axios';
import AppContext, { contextState } from './AppContext';

import './index.css';

const CurrentStep = {
  'start': <Body />,
  'engine': <Engine />,
  'color': <Color />,
  'wheels': <Wheels />,
  'result': <Result />
}

class App extends Component {

    state = {
        ...contextState
    }

    setApiData = res => this.setState({
      data: res.data
    })

    updateState = (newState) => this.setState({ ...newState });

    componentDidMount(){
        axios
          .get('https://next.json-generator.com/api/json/get/41ORKNZDU')
          .then(res => (this.setApiData(res.data)))
          .catch(err => console.log(err));
    }

    render() {

        const {updateState} = this;
        const value = {
          ...this.state,
          updateState
        }

        return (
          <AppContext.Provider value={value}>
            <AppContext.Consumer>
              {({step, init}) => (
              <div className={style.App}>
                  <NavBar />
                  {init ? null : <Body />}
                  {CurrentStep[step]}
                  {init ? (step === 'result' ? null : <FooterInfos />) : null}
              </div>
              )}
            </AppContext.Consumer>
          </AppContext.Provider>
        );
    }
}

export default App;