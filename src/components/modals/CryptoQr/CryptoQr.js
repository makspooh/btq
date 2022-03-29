import React from 'react';

import algo from '../../../assets/img/algo.jpg';
import audio from '../../../assets/img/audio.jpg';
import btc from '../../../assets/img/btc.jpg';
import eth from '../../../assets/img/eth.jpg';

import styles from './CryptoQr.module.scss';

const QR_SCHEMA = { algo, audio, btc, eth };

function CryptoQr({ views }) {
    const { params } = views[0];

    return (
        <div className={styles.container}>
            <img
                alt='qr code'
                src={QR_SCHEMA[params]}
            />
        </div>
    );
}

export default CryptoQr;
