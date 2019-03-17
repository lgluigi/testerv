import React from 'react';
import * as style from './FooterInfos.module.css';
import Arrow from './../../assets/arrow.svg';
import red from './../../assets/dot-red.png';
import blue from './../../assets/dot-blue.png';
import grey from './../../assets/dot-grey.png';
import AppContext from './../../AppContext';

const setColor = [red, blue, grey];

const FooterInfos = () => {
  return(
    <AppContext.Consumer>
      {({updateState, engine, totalValue, selected, nextStep, stagingValue, color, wheels}) => (
      <div className={style['footer']}>
        <div className={style['footer__infos']}>
          <div className={style['price']}>
            <p>Total</p>
            <h1>${totalValue + stagingValue}</h1>
            {console.log(stagingValue)}
          </div>
          <h3 className={style['model']}>Model R</h3>
          {selected.engine && <h4 className={style['kwh']}>{engine.kwh} 
          <p className={style['type']}>{engine.type}</p></h4>}
          {selected.color && <img className={style['color']} src={setColor[color.id]} alt={'color'} />}
          {selected.wheels && <img className={style['wheel']} src={wheels.image} alt={'wheel'} />}
        </div>

        <div className={style['footer__btn']} 
          onClick={
          selected.step ? () => updateState({
            step: nextStep,
            selected: {...selected, step: false},
            totalValue: totalValue += stagingValue,
            stagingValue: 0
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