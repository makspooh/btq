import classNames from 'classnames';
import React, { forwardRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { NAVIGATION } from '../../../utils/constants/navigation';

import styles from './Header.module.scss';

function Header({ onScroll, colorMode }, innerRef) {
    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderNav = () => {
        return NAVIGATION.map((el) => {
            const { title, path } = el;

            return (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => 
                        classNames(styles.link, {
                            [styles.activeLink]: isActive,
                            [styles[colorMode]]: styles[colorMode]
                        })
                    }
                >
                    <span>{title}</span>
                </NavLink>
            );
        });
    }

    return (
        <header
            ref={innerRef}
            className={styles.header}
        >
            <nav className={styles.nav}>
                {renderNav()}
            </nav>
        </header>
    );
}

export default forwardRef(Header);
