import React from 'react';

import SvgIcon from '../../../../base/SvgIcon';

import styles from './Logo.module.scss';

function Logo() {
    return (
        <>
            <span className={styles.logoText}>belletriq</span>
            <span className={styles.logoTextBg}>belletriq</span>

            <SvgIcon
                type='bgPic'
                className={styles.bgPic}
            />
        </>
    );
}

export default Logo;
