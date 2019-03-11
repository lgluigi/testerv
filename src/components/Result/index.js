import React from 'react';
import * as style from './Result.module.css';
import car from './../../assets/final-red.png';
import rebuild from './../../assets/rebuild.svg';

const Result = (props) => {
  return(
  <div className={style.Result}>
    <img className={style.Result__car} src={car} alt={'Your car'}></img>
    <div className={style.Result__infos}>
      <h1 className={style.title}>Your Model </h1>
      <div className={style.row}>
        <h4 className={style.label}>Starting Price</h4>
        <h4 className={style.price}>${`63.000`}</h4>
      </div>
      <div className={style.divider} />
      <div className={style.row}>
        <h4 className={style.label}>{`75P`} - {`75`}kWh - {`275`} miles range</h4>
        <h4 className={style.price}>+ ${`5.000`}</h4>
      </div>
      <div className={style.row}>
        <h4 className={style.label}>{`Metallic Vermilion`} Paint</h4>
        <h4 className={style.price}>{`Included`}</h4>
      </div>
      <div className={style.row}>
        <h4 className={style.label}>{`22" Performance Carbon`}</h4>
        <h4 className={style.price}>+ ${`2.000`}</h4>
      </div>
      <div className={style.divider} />
      <div className={style.row}>
        <h2 className={style.label}>Final Price</h2>
        <h2 className={style.price}>${`71.000`}</h2>
      </div>
      <h2 className={style.rebuild}>REBUILD <img src={rebuild} alt={'Rebuild'}/></h2>
    </div>
  </div>
  )
};

export default Result; 