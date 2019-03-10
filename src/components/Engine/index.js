import React from 'react';
import * as style from './Engine.module.css';

const Engine = (props) => {
  return <div className={style.Engine}>
    <img src={"https://bit.ly/2wAFr4z"} alt={'Engine'}/>
    <div className={style.Engine__infos}>
      <h2 className={style.title}>Engines</h2>
      <div className={style.box}>
        <h2 className={style.model}>75 </h2>
        <h3 className={style.kwh}>75 </h3>
        <h4 className={style.miles}>275 </h4>
        <div className={style.dot}></div>
      </div>
      <div className={style.box}>
      <h2 className={style.model}>100 </h2>
        <h3 className={style.kwh}>100 </h3>
        <h4 className={style.miles}>355 </h4>
        <div className={style.dot}></div>
      </div>
      <div className={style.box}>
      <h2 className={style.model}>125 </h2>
        <h3 className={style.kwh}>125 </h3>
        <h4 className={style.miles}>420 </h4>
        <div className={style.dot}></div>
      </div>
    </div>
  </div>
}

export default Engine;

//TODO props.engine