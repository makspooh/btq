import React from 'react';

import Header from '../../base/Header';
import Footer from '../../base/Footer';
import SvgIcon from '../../base/SvgIcon';

import styles from './Main.module.scss';

function Main() {
  const renderLogo = () => {
    return (
      <>
        <span className={styles.logoText}>belletriq</span>
        <span className={styles.logoTextBg}>belletriq</span>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Header />

        <div className={styles.infoData}>
          {renderLogo()}

          <SvgIcon
            type='bgPic'
            className={styles.bgPic}
          />
        </div>

        <Footer />
      </div>

      <div className={styles.content}></div>
    </div>
  );
}

export default Main;
