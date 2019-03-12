import React from 'react';
import * as style from './Wheels.module.css';
import Metallic from './../../assets/wheel-metalic.png';
import Carbon from './../../assets/wheel-carbon.png';
import Grafitti from './../../assets/wheel-grafitti.png';
import AppContext from './../../AppContext';


const selectWheel = (id, data) => {
  return {
    id: id,
    label: data.wheels.items[id].label,
    image: data.wheels.items[id].image,
    price: data.wheels.items[id].price,
  }
}

const Wheels = () => {
  return( 
    <AppContext.Consumer>
      {({updateState,data}) => (
      <div className={style.Wheels}>
        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: selectWheel(0, data),

        })}>
          <img src={Metallic} alt={data.wheels.item[0].label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{data.wheels.item[0].label}c</h2>
          <h3 className={style.price}>{data.wheels.wheels[0].price === 0 ? 'Included' : null}</h3>
        </div>
        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: selectWheel(1, data),

        })}>
          <img src={Grafitti} alt={data.wheels.item[0].label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{data.wheels.item[1].label}</h2>
          <h3 className={style.price}>+${data.wheels.wheels[1].price}</h3>
        </div>
        <div className={style.Wheel__container} onClick={() => updateState({
          wheels: selectWheel(2, data),
          
        })}>
          <img src={Carbon} alt={data.wheels.item[0].label} className={style.Wheels__wheel} />
          <h2 className={style.model}>{data.wheels.item[2].label}</h2>
          <h3 className={style.price}>+${data.wheels.wheels[2].price}</h3>
        </div>
      </div>
      )}
    </AppContext.Consumer>
  )
};

export default Wheels;