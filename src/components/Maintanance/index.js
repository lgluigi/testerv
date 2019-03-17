import React from 'react';
import * as style from './Maintanance.module.css';


const MaintanancePage = () => {
  return (
    <div className={style['maintanance']}>
      <img className={style['maintanance__img']} 
      src={require('./../../assets/404.png')} alt={'Page under construction, sorry ;('} />
    </div>
  );
}

export default MaintanancePage;