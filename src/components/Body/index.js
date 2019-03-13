import React from 'react';
import * as style from './Body.module.css';
import car from './../../assets/car-home.png';
import arrow from './../../assets/arrow.svg';
import AppContext from './../../AppContext';


const Body = () => {

  return (
    <AppContext.Consumer>
      {({updateState, data, finalPrice}) => (
        <div className={style.Body}>
          <h3 className={style.Body__h3}>Build your</h3>

          <div className={style.Body__wrapper}>
            <h1 className={style.Body__h1}>MODEL </h1>
          </div>

          <div className={style.Body__car}><img src={car} alt={'Model R'}/></div>

          <div className={style.Body__btn}>
            <h2 
            onClick={() => updateState({
              init: true, 
              step: 'engine',
              totalValue: data.price
            })}>BEGIN <img src={arrow} alt={arrow}></img></h2>
          </div>
          <div className={style.Body__infos}>
            <div className={style.info}>
              <h2>2.5 </h2>
              <h4>From 0 to 100</h4>
            </div>
            <div className={style.info}>
              <h2>420 </h2>
              <h4>Miles range</h4>
            </div>
            <div className={style.info}>
              <h2>250 </h2>
              <h4>Max speed</h4>
            </div>
          </div>
        </div>
        )}
    </AppContext.Consumer>
  )
};

export default Body;