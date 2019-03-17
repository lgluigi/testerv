import React from 'react';
import * as style from './Engine.module.css';
import AppContext from './../../AppContext';

const selectEngine = (id, data) => {
  return {
    id: id,
    type: data.engine.items[id].type,
    kwh: data.engine.items[id].kwh,
    range: data.engine.items[id].range,
    image: data.engine.items[id].image,
    price: data.engine.items[id].price
  }
}

const getEngine = (id, data) => {
  return id === undefined ?  data.engine.items[0] : data.engine.items[id];
}

const isSelected = (engine, id) => {
  return engine.id === id;
}

const Engine = () => {
  return(
    <AppContext.Consumer> 
      {({updateState, data, engine, selected}) => (     
      <div className={style['engine']}>
        <img className={style['engine__img']} src={selected.engine ? engine.image : data.engine.items[0].image} alt={'Engine'}/>
        <div className={style['engine__infos']}>
          <h2 className={style['title']}>Engines</h2>

          <div className={isSelected(engine, 0) ? style['box--active'] : style['box']}
          onClick={() => updateState({
            engine: selectEngine(0, data),
            stagingValue: getEngine(engine.id, data).price, 
            selected: {...selected, engine: true, step: true},
            nextStep: 'color'
            })}>

            <h2 className={style['model']}>{getEngine(0, data).kwh} </h2>
            <h3 className={style['kwh']}>{getEngine(0, data).kwh} </h3>
            <h4 className={style['miles']}>{getEngine(0, data).range} </h4>
            <div className={style['dot']}></div>
          </div>

          <div className={isSelected(engine, 1) ? style['box--active'] : style['box']} 
          onClick={() => updateState({
            engine: selectEngine(1, data),
            stagingValue: getEngine(engine.id, data).price,
            selected: {...selected, engine: true, step: true},
            nextStep: 'color'
            })}>

            <h2 className={style['model']}>{getEngine(1, data).kwh} </h2>
            <h3 className={style['kwh']}>{getEngine(1, data).kwh} </h3>
            <h4 className={style['miles']}>{getEngine(1, data).range} </h4>
            <div className={style['dot']}></div>
          </div>

          <div className={isSelected(engine, 2) ? style['box--active'] : style['box']} 
          onClick={() => updateState({
            engine: selectEngine(2, data),
            stagingValue: getEngine(engine.id, data).price,
            selected: {...selected, engine: true, step: true},
            nextStep: 'color'
            })}>
            <h2 className={style['model']}>{getEngine(2, data).kwh}</h2>
            <h3 className={style['kwh']}>{getEngine(2, data).kwh} </h3>
            <h4 className={style['miles']}>{getEngine(2, data).range} </h4>
            <div className={style['dot']}></div>
          </div>
        </div>
      </div>
      )}
    </AppContext.Consumer>
  )
}

export default Engine;

//TODO props.engine