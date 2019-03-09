import React from 'react';
import * as style from './FooterInfos.module.css';
import Arrow from './../assets/arrow.svg';
import Dot from './../assets/dot-red.png';
import Wheel from './../assets/wheel-metalic.png';

const FooterInfos = (props) => {
  return <div className={style.Footer}>
    <div className={style.Footer__infos}>
      <div className={style.price}>
        <p>Total</p>
        <h1>$63.000</h1>
      </div>
      <h3 className={style.model}>Model R</h3>
      <h4 className={style.kwh}>75 </h4>
      <img className={style.color} src={Dot} alt={'color'} />
      <img className={style.wheel} src={Wheel} alt={'wheel'} />
    </div>
    <div className={style.Footer__btn}>
      <h2>next</h2>
      <img src={Arrow} alt={'arrow'}/>
    </div>
  </div>
};

export default FooterInfos;