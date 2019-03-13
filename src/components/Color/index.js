import React from 'react';
import * as style from './Color.module.css';
import red from './../../assets/dot-red.png';
import blue from './../../assets/dot-blue.png';
import grey from './../../assets/dot-grey.png';
import AppContext from './../../AppContext';

const selectColor = (id, data) => {
  return {
    id: id,
    hex: data.color.items[id].hexadecimal,
    label: data.color.items[id].label,
    image: data.color.items[id].image,
    price: data.color.items[id].price,
  }
}

const getColor = (id, data) => {
  return id === undefined ?  data.color.items[0] : data.color.items[id];
}

const Color = () => {
  return(
  <AppContext.Consumer>
    {({data, updateState, color, selected}) => (
      <div className={style.Color}>
        <div className={style.Color__img}>
          <img 
          src={getColor(color.id, data).image} 
          alt={getColor(color.id, data).label} />
          <h2 className={style.color}>{getColor(color.id, data).label}</h2>
          <h2 className={style.price}>
            {getColor(color.id, data).price === 0 ? 'Included' : `+$${getColor(color.id, data).price}`}
          </h2>
        </div>

        <div className={style.Color__selection}>
          <h1>Color</h1>
          <p>
            {data.color.description}
          </p>
          <div>
              <div className={color.id === 0 ? style.Color__option__active : style.Color__option} onClick={() => updateState({
                color: selectColor(0, data),
                stagingValue: getColor(color.id, data).price,
                selected: {...selected, step: true, color: true},
                nextStep: 'wheels'
              })}><img src={red}  alt={getColor(0, data).label} /></div>

              <div className={color.id === 1 ? style.Color__option__active : style.Color__option} onClick={() => updateState({
                color: selectColor(1, data),
                stagingValue: getColor(color.id, data).price,
                selected: {...selected, step: true, color: true},
                nextStep: 'wheels',
              })}><img src={blue} alt={getColor(1, data).label} /></div>

              <div className={color.id === 2 ? style.Color__option__active : style.Color__option} onClick={() => updateState({
                color: selectColor(2, data),
                stagingValue: getColor(color.id, data).price,
                selected: {...selected, step: true, color: true},
                nextStep: 'wheels',
              })}><img src={grey} alt={getColor(2, data).label} /></div>
          </div>
        </div>
      </div>
    )}
  </AppContext.Consumer>
  )
};

export default Color;