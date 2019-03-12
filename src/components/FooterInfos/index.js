import React from 'react';
import * as style from './FooterInfos.module.css';
import Arrow from './../../assets/arrow.svg';
import Dot from './../../assets/dot-red.png';
import Wheel from './../../assets/wheel-metalic.png';
import AppContext from './../../AppContext';


const FooterInfos = () => {
  return(
    <AppContext.Consumer>
      {({updateState, data, engine, totalValue, selected, nextStep}) => (
      <div className={style.Footer}>
        <div className={style.Footer__infos}>
          <div className={style.price}>
            <p>Total</p>
            <h1>${totalValue}</h1>
          </div>
          <h3 className={style.model}>Model R</h3>
          {selected.engine ? 
            <h4 className={style.kwh}>{engine.kwh} 
              <p className={style.type}>{engine.type}</p>
            </h4> : null
          }
          {selected.color ? <img className={style.color} src={Dot} alt={'color'} /> : null}
          {selected.wheels ? <img className={style.wheel} src={Wheel} alt={'wheel'} /> : null}
        </div>
        <div className={style.Footer__btn} 

          onClick={
          selected.step ? () => updateState({
            step: nextStep,
            selected: {step: false}
          }) : null}>
          <h2>next</h2>
          <img src={Arrow} alt={'arrow'}/>
        </div>
      </div>
      )}
    </AppContext.Consumer>
  )
};

export default FooterInfos;