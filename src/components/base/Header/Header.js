import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAVIGATION } from '../../../utils/constants/navigation';

import styles from './Header.module.scss';

function Header() {
    const renderNav = () => {
        return NAVIGATION.map((el) => {
            const { title, path } = el;

            return (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => 
                        isActive
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    <span>{title}</span>
                </NavLink>
            );
        });
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {renderNav()}
            </nav>
        </header>
    );
}

export default Header;
