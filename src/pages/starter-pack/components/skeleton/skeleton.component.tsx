import React from 'react';
import style from './skeleton.module.scss';

export const Skeleton: React.FC = () => {
 return <div>
          <h1 className={style.pageHeader}></h1>

          <div className={style.container}>
            <div className={style.dogPic}></div>

            <div className={style.responsiveConianer}> 
                <div className={style.nameGenerator}></div>
                <div className={style.toBuy}></div>
            </div>  
          </div>
          <div className={style.fromBreeder}></div>
          <div className={style.additionaInfo}></div>
          <div className={style.backBtn}></div>
        </div>
};
