import React from 'react';
import * as style from './NavBar.module.css';
import logo from './../../assets/RV-logo.svg';
import AppContext from './../../AppContext';


const isModel = (model, modelSelected) => {
  return model === modelSelected;
}

const NavBar = () => {
  return(
  <AppContext.Consumer>
    {({updateState, model}) => (
      <div className={style['navbar']}>
        <img onClick={() => updateState({
        init: false,
        totalValue: 0,
        stagingValue: 0,
        color: {},
        wheel: {},
        engine: {},
        step: "",
        selected: {step: false, engine: false, color: false, wheels: false},
        nextStep: ""}
        )}
        className={style['navbar__logo']} src={logo} alt={'Red Ventures logo'} />
        <ul className={style.navbar__ul}>
          <li className={isModel(model, 'modelR') ? style['navbar__btn--active'] : style['navbar__btn']} 
          onClick={() => updateState({model: 'modelR'})}>Model R</li>

          <li className={isModel(model, 'modelIQ') ? style['navbar__btn--active'] : style['navbar__btn']} 
          onClick={() => updateState({model: 'modelIQ'})}>Model IQ</li>

          <li className={isModel(model, 'modelMobi') ? style['navbar__btn--active'] : style['navbar__btn']} 
          onClick={() => updateState({model: 'modelMobi'})}>Model Mobi</li>

          <li className={isModel(model, 'modelCharlie') ? style['navbar__btn--active'] : style['navbar__btn']} 
          onClick={() => updateState({model: 'modelCharlie'})}>Model Charlie</li>

          <li className={isModel(model, 'modelItaly') ? style['navbar__btn--active'] : style['navbar__btn']} 
          onClick={() => updateState({model: 'modelItaly'})}>Model Italy</li>
        </ul>
      </div>
    )}
  </AppContext.Consumer>
  )
}

export default NavBar;