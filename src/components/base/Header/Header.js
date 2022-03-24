import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { NAVIGATION } from '../../../utils/constants/navigation';

import styles from './Header.module.scss';

function Header({ handleScroll }) {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
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

Header.propTypes = {
    handleScroll: PropTypes.func
};

Header.defaultProps = {
    handleScroll: () => {}
};

export default Header;
