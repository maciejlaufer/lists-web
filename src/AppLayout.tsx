import React from 'react';
import styles from './App.module.scss';

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.App}>
      Layout component
      {children}
    </div>
  );
};

export default AppLayout;
