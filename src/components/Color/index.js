import React from 'react';
import * as style from './Color.module.css';
import car from './../../assets/color-red.png';
import red from './../../assets/dot-red.png';
import blue from './../../assets/dot-blue.png';
import grey from './../../assets/dot-grey.png';

const Color = (props) => {
  return(
  <div className={style.Color}>

    <div className={style.Color__img}>
      <img src={car} alt={'Metallic Vermilion'} />
      <h2 className={style.color}>{`Metalic Vermilion`}</h2>
      <h2 className={style.price}>{`Included`}</h2>
    </div>

    <div className={style.Color__selection}>
      <h1>Color</h1>
      <p>
        {`The 2019 Model R have 3 unique metalic color options. Each color was meticulously
        developed to look like something completely new to your eyes.`}
      </p>
      <div>
          <div className={style.Color__option} ><img src={red} alt={'Red'} /></div>
          <div className={style.Color__option} ><img src={blue} alt={'Blue'} /></div>
          <div className={style.Color__option} ><img src={grey} alt={'Grey'} /></div>
      </div>
    </div>
  </div>
  )
};

export default Color;