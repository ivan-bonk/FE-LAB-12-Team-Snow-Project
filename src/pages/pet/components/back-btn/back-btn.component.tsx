import React from 'react';
import { Link } from 'react-router-dom';
import style from './back-btn.module.scss';

export const BackBtn: React.FC<{}> = () => {
    return (
      <div className={style.container}>
      <Link to="/result" className={style.backButton}>
          Повернутись
      </Link>
      </div>
    );
  };
  