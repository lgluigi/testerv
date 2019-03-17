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

const isSelected = (color, id) => {
  return color.id === id;
}

const Color = () => {
  return(
  <AppContext.Consumer>
    {({data, updateState, color, selected}) => (
      <div className={style['color']}>
        <div className={style['color__img']}>
          <img src={getColor(color.id, data).image} alt={getColor(color.id, data).label} />
          <h2 className={style['label']}>{getColor(color.id, data).label}</h2>
          <h2 className={style['price']}>
            {getColor(color.id, data).price === 0 ? 'Included' : `+$${getColor(color.id, data).price}`}
          </h2>
        </div>

        <div className={style['color__selection']}>
          <h1>Color</h1>
          <p>
            {data.color.description}
          </p>
          <div>
              <div className={isSelected(color, 0) ? style['color__option--active'] : style['color__option']} 
              onClick={() => updateState({
                color: selectColor(0, data),
                stagingValue: data.color.items[0].price,
                selected: {...selected, step: true, color: true},
                nextStep: 'wheels'
              })}><img src={red}  alt={getColor(0, data).label} /></div>

              <div className={isSelected(color, 1) ? style['color__option--active'] : style['color__option']} 
              onClick={() => updateState({
                color: selectColor(1, data),
                stagingValue: data.color.items[1].price,
                selected: {...selected, step: true, color: true},
                nextStep: 'wheels',
              })}><img src={blue} alt={getColor(1, data).label} /></div>

              <div className={isSelected(color, 2) ? style['color__option--active'] : style['color__option']} 
              onClick={() => updateState({
                color: selectColor(2, data),
                stagingValue: data.color.items[2].price,
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