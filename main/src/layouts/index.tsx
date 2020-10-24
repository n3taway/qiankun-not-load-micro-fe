import React from 'react';
import styles from "./AppLayout.less";

const Layout: React.FC = (props) => {
  return (
    <div className={styles.appLayoutWrap}>
      <div>header</div>
      <div className={styles.body}>
        {props.children}
      </div>
      <div>Footer</div>
    </div>
  )
}

export default Layout;
