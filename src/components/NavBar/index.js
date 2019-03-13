import React from 'react';
import * as style from './NavBar.module.css';
import logo from './../../assets/RV-logo.svg';
import AppContext from './../../AppContext';


const NavBar = () => {
  return(
  <AppContext.Consumer>
    {({updateState}) => (
      <div className={style.NavBar}>
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
        className={style.NavBar__logo} src={logo} alt={'Red Ventures logo'} />
        <ul className={style.NavBar__ul}>
          <li className={style.NavBar__btn}>Model R</li>
          <li className={style.NavBar__btn}>Model IQ</li>
          <li className={style.NavBar__btn}>Model Mobi</li>
          <li className={style.NavBar__btn}>Model Charlie</li>
          <li className={style.NavBar__btn}>Model Italy</li>
        </ul>
      </div>
    )}
  </AppContext.Consumer>
  )
}

export default NavBar;