import React from 'react';

import styles from './About.module.scss';

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span className={styles.text}>
                    Belletriq is the Ukrainian based artistic community which unites likeminded people from all over the world. Started mainly as sound-production team, Belletriq keeps growing in all creative directions and won’t stop no matter how hard the war tries to prevent it.
                </span>

                <span className={styles.text}>
                    We collecting donates to support artists in need and forthcoming projects. Slava Ukraïni!
                </span>
            </div>
        </div>
    );
}

export default About;
