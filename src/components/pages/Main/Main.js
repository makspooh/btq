import React, { useEffect, useRef, useState } from 'react';

import * as ROUTES from '../../../utils/constants/routes';

import Header from '../../base/Header';
import Footer from '../../base/Footer';
import SvgIcon from '../../base/SvgIcon';
import About from './components/About';
import Artists from './components/Artists/Artists';
import Mixes from './components/Mixes';

import styles from './Main.module.scss';

const PATHS = Object.values(ROUTES)
  .filter((el) => el !== '/');

function Main() {
  const [headerColorMode, setHeaderColorMode] = useState('light');
  const [footerColorMode, setFooterColorMode] = useState('light');
  const [contentLeftValue, setContentLeftValue] = useState(undefined);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const { pathname } = window.location;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handlePathChange, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getElementsBounding = () => {
    const headerHeight = headerRef?.current?.getBoundingClientRect().height || 0;
    const footerHeight = footerRef?.current?.getBoundingClientRect().height || 0;

    return {
      headerHeight,
      footerHeight
    };
  }

  function handleResize() {
    setIsDesktop(window.innerWidth >= 1200);
  }

  const handleScroll = () => {
    const { scrollY, innerHeight } = window;
    const { headerHeight, footerHeight } = getElementsBounding();

    const currentHeaderColorMode = scrollY >= (innerHeight - headerHeight) ? 'dark' : 'light';
    const currentFooterColorMode = scrollY >= (footerHeight - footerHeight / 2) ? 'dark' : 'light';

    setFooterColorMode(currentFooterColorMode);
    setHeaderColorMode(currentHeaderColorMode);
  }

  function handlePathChange() {
    const nextPathIndex = PATHS.indexOf(pathname);

    switch (true) {
      case nextPathIndex === 0: {
        setContentLeftValue(nextPathIndex);
        break;
      }

      default: {
        const output = isDesktop
          ? `-${50 * nextPathIndex + (4 * nextPathIndex)}`
          : `-${100 * nextPathIndex + (8 * nextPathIndex)}`;

        setContentLeftValue(output);
        break;
      }
    }
  }

  const renderLogo = () => {
    return (
      <>
        <span className={styles.logoText}>belletriq</span>
        <span className={styles.logoTextBg}>belletriq</span>
      </>
    );
  }

  const getWidth = () => {
    const output = isDesktop
      ? `${100 / 2 * PATHS.length}vw`
      : `${100 * PATHS.length}vw`;

    return output;
  }

  if (contentLeftValue === undefined) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <Header
          ref={headerRef}
          onScroll={handleScroll}
          colorMode={headerColorMode}
        />

        <div className={styles.infoData}>
          {renderLogo()}

          <SvgIcon
            type='bgPic'
            className={styles.bgPic}
          />
        </div>

        <Footer
          ref={footerRef}
          onScroll={handleScroll}
          colorMode={footerColorMode}
        />
      </div>

      <div className={styles.content}>
        <div
          className={styles.contentData}
          style={{
            width: getWidth(),
            left: `${contentLeftValue}vw`
          }}
        >
          <About />
          <Artists />
          <Mixes />
        </div>
      </div>
    </section>
  );
}

export default Main;
