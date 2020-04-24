import React from 'react';
import style from './skeleton.module.scss';

export const Skeleton: React.FC = () => {
 return <div>
          <h1 className={style.pageHeader}></h1>

          <div className={style.container}>
            <div className={style.dogPic}></div>

            <div className={style.responsiveConianer}> 
                <div className={style.addBtn}></div>
                <div className={style.characteristics}></div>
            </div>  
          </div>

          <div className={style.observations}></div>
          <div className={style.additionaInfo}></div>
          <div className={style.starterLink}></div>
          <div className={style.backBtn}></div>
        </div>
};
