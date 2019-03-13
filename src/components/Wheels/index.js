import React from 'react';
import * as style from './Wheels.module.css';
import Carbon from './../../assets/wheel-carbon.png';
import Grafitti from './../../assets/wheel-grafitti.png';
import AppContext from './../../AppContext';


const updateWheels = (id, data) => {
  return {
    id: id,
    label: data.wheels.items[id].label,
    image: data.wheels.items[id].image,
    price: data.wheels.items[id].price,
  }
}

const getWheels = (id, data) => {
  return id === undefined ?  data.wheels.items[0] : data.wheels.items[id];
}


const Wheels = () => {
  return( 
    <AppContext.Consumer>
      {({updateState,data,wheels, selected}) => (

      <div className={style.Wheels}>
        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: updateWheels(0, data),
          stagingValue: getWheels(wheels.id, data).price,
          nextStep: 'result',
          selected: {...selected, wheels: true, step: true}
        })}>
          <img src={getWheels(0, data).image} alt={getWheels(0, data).label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{getWheels(0, data).label}c</h2>
          <h3 className={style.price}>{getWheels(0, data).price === 0 ? 'Included' : null}</h3>
        </div>

        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: updateWheels(1, data),
          stagingValue: getWheels(wheels.id, data).price,
          nextStep: 'result',
          selected: {...selected, wheels: true, step: true},
        })}>
          <img src={Grafitti} alt={getWheels(1, data).label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{getWheels(1, data).label}</h2>
          <h3 className={style.price}>+${getWheels(1, data).price}</h3>
        </div>

        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: updateWheels(2, data),
          stagingValue: getWheels(wheels.id, data).price,
          nextStep: 'result',
          selected: {...selected, wheels: true, step: true},
        })}>
          <img src={Carbon} alt={getWheels(2, data).label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{getWheels(2, data).label}</h2>
          <h3 className={style.price}>+${getWheels(2, data).price}</h3>
        </div>
      </div>
      )}
    </AppContext.Consumer>
  )
};

export default Wheels;