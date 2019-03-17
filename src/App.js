import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Body from './components/Body';
import Engine from './components/Engine';
import FooterInfos from './components/FooterInfos';
import Color from './components/Color';
import Wheels from './components/Wheels';
import Result from './components/Result';
import Maintanance from './components/Maintanance';
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

    rebuild = () => this.updateState({
      init: false,
      totalValue: 0,
      stagingValue: 0,
      color: {},
      wheel: {},
      engine: {},
      step: "",
      selected: {step: false, engine: false, color: false, wheels: false},
      nextStep: ""});

    componentDidMount(){
        axios
          .get('https://next.json-generator.com/api/json/get/41ORKNZDU')
          .then(async res => ( await this.setApiData(res.data)))
          .catch(err => console.log(err));
    }

    render() {

        const {updateState, rebuild} = this;
        const value = {
          ...this.state,
          updateState,
          rebuild
        }

        return (
          <AppContext.Provider value={value}>
            <AppContext.Consumer>
              {({step, init, model}) => (
              <div className={style.page}>
                  <NavBar />
                  {init ? null : (model === 'modelR' ? <Body /> : null)}
                  {model === 'modelR' ? CurrentStep[step] : <Maintanance />}
                  {init ? (step === 'result' ? null : <FooterInfos />) : null}
              </div>
              )}
            </AppContext.Consumer>
          </AppContext.Provider>
        );
    }
}

export default App;