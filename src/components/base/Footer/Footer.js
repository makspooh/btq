import React, { forwardRef, useEffect } from 'react';
import classNames from 'classnames';

import { FOOTER_SOCIAL } from '../../../utils/constants/footer_social';

import SvgIcon from '../SvgIcon';

import styles from './Footer.module.scss';

function Footer({ onScroll, colorMode }, innerRef) {
    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
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
                    <SvgIcon
                        type={type}
                        className={classNames(
                            { [styles.dark]: colorMode === 'dark' }
                        )}
                    />
                </a>
            );
        });
    }

    return (
        <footer
            ref={innerRef}
            className={styles.footer}
        >
            <nav className={styles.nav}>
                {renderIcons()}
            </nav>
        </footer>
    );
}

export default forwardRef(Footer);
