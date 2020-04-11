import React from 'react';

import style from './loading-spinner.module.scss';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={style.loadingBlock}>
      <div className={style.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
