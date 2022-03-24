import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FOOTER_SOCIAL } from '../../../utils/constants/footer_social';

import SvgIcon from '../SvgIcon';

import styles from './Footer.module.scss';

function Footer({ handleScroll }) {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderIcons = () => {
        return FOOTER_SOCIAL.map((el) => {
            const { type, path } = el;

            return (
                <a
                    key={path}
                    href={path}
                    target='_blank'
                    rel='noreferrer'
                    className={styles.icon}
                >
                    <SvgIcon type={type} />
                </a>
            );
        });
    }

    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                {renderIcons()}
            </nav>
        </footer>
    );
}

Footer.propTypes = {
    handleScroll: PropTypes.func
};

Footer.defaultProps = {
    handleScroll: () => {}
};

export default Footer;
