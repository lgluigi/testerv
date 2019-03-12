import React from 'react';
import * as style from './Color.module.css';
import car from './../../assets/color-red.png';
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
    price: data.color.items[id].price
  }
}

const getColor = (id, data) => {
  id === undefined ? id = 0 : id = id;
  return data.color.items[id]
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
            {data.color.items.description}
          </p>
          <div>
              <div className={style.Color__option} onClick={() => updateState({
                color: selectColor(0, data),
                selected: {step: true, color: true},
                nextStep: 'wheels',
                stagingValue: getColor(0, data).price
              })}><img src={red}  alt={getColor(0, data).label} /></div>

              <div className={style.Color__option} onClick={() => updateState({
                color: selectColor(1, data),
                selected: {step: true, color: true},
                nextStep: 'wheels',
                stagingValue: getColor(1, data).price
              })}><img src={blue} alt={getColor(1, data).label} /></div>

              <div className={style.Color__option} onClick={() => updateState({
                color: selectColor(2, data),
                selected: {step: true, color: true},
                nextStep: 'wheels',
                stagingValue: getColor(2, data).price
              })}><img src={grey} alt={getColor(2, data).label} /></div>
          </div>
        </div>
      </div>
    )}
  </AppContext.Consumer>
  )
};

export default Color;