import React from 'react';

import { FOOTER_SOCIAL } from '../../../utils/constants/footer_social';

import SvgIcon from '../SvgIcon';

import styles from './Footer.module.scss';

function Footer() {
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

export default Footer;
