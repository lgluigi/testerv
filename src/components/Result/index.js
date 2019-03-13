import React from 'react';
import * as style from './Result.module.css';
import rebuildIco from './../../assets/rebuild.svg';
import AppContext from './../../AppContext';

const isIncluded = (value) => {
  return value === 0 ? 'Included' : `+ $${value}`;
}

const Result = () => {
  return(
    <AppContext.Consumer>
      {({data, engine, color, wheels, totalValue, updateState}) => (
      <div className={style.Result}>
        <img className={style.Result__car} src={data.results.items[color.id].image} alt={color.label}></img>
        <div className={style.Result__infos}>
          <h1 className={style.title}>Your Model </h1>
          <div className={style.row}>
            <h4 className={style.label}>Starting Price</h4>
            <h4 className={style.price}>${data.price}</h4>
          </div>
          <div className={style.divider} />
          <div className={style.row}>
            <h4 className={style.label}>{engine.kwh}{engine.type} - {engine.kwh}kWh - {engine.range} miles range</h4>
            <h4 className={style.price}>{isIncluded(engine.price)}</h4>
          </div>
          <div className={style.row}>
            <h4 className={style.label}>{color.label} Paint</h4>
            <h4 className={style.price}>{isIncluded(color.price)}</h4>
          </div>
          <div className={style.row}>
            <h4 className={style.label}>{wheels.label}</h4>
            <h4 className={style.price}>{isIncluded(wheels.price)}</h4>
          </div>
          <div className={style.divider} />
          <div className={style.row}>
            <h2 className={style.label}>Final Price</h2>
            <h2 className={style.price}>${totalValue}</h2>
          </div>
          <h3 onClick={() => updateState({
            init: false,
            totalValue: 0,
            stagingValue: 0,
            color: {},
            wheel: {},
            engine: {},
            step: "",
            selected: {step: false, engine: false, color: false, wheels: false},
            nextStep: ""
          })} className={style.rebuild}>REBUILD <img src={rebuildIco} alt={'Rebuild'}/></h3>
        </div>
      </div>
      )}
    </AppContext.Consumer>
  )
};

export default Result; 