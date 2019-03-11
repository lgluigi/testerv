import React from 'react';
import * as style from './Wheels.module.css';
import Metallic from './../../assets/wheel-metalic.png';
import Carbon from './../../assets/wheel-carbon.png';
import Grafitti from './../../assets/wheel-grafitti.png';

const Wheels = (props) => {
  return( 
  <div className={style.Wheels}>
    <div className={style.Wheel__container}>
      <img src={Metallic} alt={'Metallic Wheel'} className={style.Wheels__wheel} />
      <h2 className={style.model}>{`20" Silver Metalli`}c</h2>
      <h3 className={style.price}>{`Included`}</h3>
    </div>
    <div className={style.Wheel__container}>
      <img src={Grafitti} alt={'Grafitti Wheel'} className={style.Wheels__wheel} />
      <h2 className={style.model}>{`20" Grafitti`}</h2>
      <h3 className={style.price}>+${`2.000`}</h3>
    </div>
    <div className={style.Wheel__container}>
      <img src={Carbon} alt={'Carbon Wheel'} className={style.Wheels__wheel} />
      <h2 className={style.model}>{`22" Performance Carbon`}</h2>
      <h3 className={style.price}>+${`2.000`}</h3>
    </div>
  </div>
  )
};

export default Wheels;