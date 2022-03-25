import React from 'react';

import styles from './Mixes.module.scss';

function Mixes() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.mixBox}>
                    <iframe
                        title='frame'
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1142387755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    />

                    <div>
                        <a
                            className={styles.link}
                            href="https://soundcloud.com/belletriq"
                            title="belletriq🇺🇦"
                            target="_blank"
                            rel="noreferrer"
                        >belletriq🇺🇦 · </a>

                        <a
                            className={styles.link}
                            href="https://soundcloud.com/belletriq/mix001"
                            title="Belletriq Mix Series: 001 c01d357"
                            target="_blank"
                            rel="noreferrer"
                        >Belletriq Mix Series: 001 c01d357</a>
                    </div>
                </div>

                <div className={styles.mixBox}>
                    <iframe
                        title='frame2'
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1179612178&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    />
                    
                    <div>
                        <a
                            className={styles.link}
                            href="https://soundcloud.com/belletriq"
                            title="belletriq🇺🇦"
                            target="_blank"
                            rel="noreferrer"
                        >belletriq🇺🇦 · </a>

                        <a
                            className={styles.link}
                            href="https://soundcloud.com/belletriq/mix002"
                            title="Belletriq Mix Series: 002 cutmylips"
                            target="_blank"
                            rel="noreferrer"
                        >Belletriq Mix Series: 002 cutmylips</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mixes;
