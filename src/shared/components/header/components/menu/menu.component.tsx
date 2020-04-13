import React from 'react';

import styles from './menu.module.scss';

export const Menu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <ul>
        <li>Value</li>
        <li>Value</li>
        <li>Value</li>
        <li>Value</li>
        <li>Value</li>
      </ul>
    </div>
  );
};
