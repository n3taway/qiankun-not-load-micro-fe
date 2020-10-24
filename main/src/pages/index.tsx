import React from 'react';
import { MicroApp } from 'umi';
import styles from './index.less';

export default () => {

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MicroApp name="micro-sub"/>
    </div>
  );
}
