import React from 'react';
import * as style from './NavBar.module.css';
import logo from './../../assets/RV-logo.svg';

const NavBar = (props) => {
  return <div className={style.NavBar}>
      <img src={logo} alt={'Red Ventures logo'} size={'100px'}/>
      <ul className={style.NavBar__ul}>
        <li className={style.NavBar__btn}>Model R</li>
        <li className={style.NavBar__btn}>Model IQ</li>
        <li className={style.NavBar__btn}>Model Mobi</li>
        <li className={style.NavBar__btn}>Model Charlie</li>
        <li className={style.NavBar__btn}>Model Italy</li>
      </ul>
    </div>
  
}

export default NavBar;