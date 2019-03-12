import React from 'react';
import * as style from './Engine.module.css';
import AppContext from './../../AppContext';

const selectEngine = (id, data) => {
  return {
    id: id,
    type: data.engine.items[id].type,
    kwh: data.engine.items[id].kwh,
    range: data.engine.items[id].range,
    image: data.engine.items[id].image
  }
}

const Engine = () => {
  return(
    <AppContext.Consumer> 
      {({updateState, data, engine, selected}) => (     
      <div className={style.Engine}>
        <img className={style.Engine__img} src={selected.engine ? engine.image : data.engine.items[0].image} alt={'Engine'}/>
        <div className={style.Engine__infos}>
          <h2 className={style.title}>Engines</h2>

          <div className={engine.id === 0 ? style.box__active : style.box}
          onClick={() => updateState({
            engine: selectEngine(0, data),
            stagingValue: data.engine.items[0].price, 
            selected: {engine: true, step: true},
            nextStep: 'color'
            })}>

            <h2 className={style.model}>{data.engine.items[0].kwh} </h2>
            <h3 className={style.kwh}>{data.engine.items[0].kwh} </h3>
            <h4 className={style.miles}>{data.engine.items[0].range} </h4>
            <div className={style.dot}></div>
          </div>

          <div className={engine.id === 1 ? style.box__active : style.box} 
          onClick={() => updateState({
            engine: selectEngine(1, data),
            stagingValue: data.engine.items[1].price,
            selected: {engine: true, step: true},
            nextStep: 'color'
            })}>

            <h2 className={style.model}>{data.engine.items[1].kwh} </h2>
            <h3 className={style.kwh}>{data.engine.items[1].kwh} </h3>
            <h4 className={style.miles}>{data.engine.items[1].range} </h4>
            <div className={style.dot}></div>
          </div>

          <div className={engine.id === 2 ? style.box__active : style.box} 
          onClick={() => updateState({
            engine: selectEngine(2, data),
            stagingValue: data.engine.items[2].price,
            selected: {engine: true, step: true},
            nextStep: 'color'
            })}>
            <h2 className={style.model}>{data.engine.items[2].kwh}</h2>
            <h3 className={style.kwh}>{data.engine.items[2].kwh} </h3>
            <h4 className={style.miles}>{data.engine.items[2].range} </h4>
            <div className={style.dot}></div>
          </div>
        </div>
      </div>
      )
      }
    </AppContext.Consumer>
  )
}

export default Engine;

//TODO props.engine