import React, { useState } from 'react';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';

import SvgIcon from '../../../../base/SvgIcon';

import { DONATE } from '../../../../../utils/constants/donate';

import styles from './Donate.module.scss';

function Donate() {
    const [isVisibleState, setIsVisibleState] = useState({ crypto: false, currency: false });

    const handleChangeVisibility = (index) => () => {
        setIsVisibleState((prev) => {
            const output = cloneDeep(prev);

            switch (index) {
                case 0:
                    output.crypto = !output.crypto;
                    break;
            
                default:
                    output.currency = !output.currency;
                    break;
            }

            return output;
        });
    }

    const handleCopy = (value) => () => {
        navigator.clipboard.writeText(value);
    }

    const renderDonateItems = (items) => {
        return items.map((el, index) => {
            const { type, title, value } = el;

            return (
                <div
                    key={title}
                    className={styles.linkContainer}
                >
                    <span className={styles.link}>
                        {title}
                    </span>

                    {type === 'text'
                        ? (
                            <div className={styles.iconsContainer}>
                                <div className={styles.iconContainer}>
                                    <SvgIcon
                                        type='copy'
                                        className={styles.icon}
                                        onClick={handleCopy(value)}
                                    />
                                </div>

                                <div className={styles.iconContainer}>
                                    <SvgIcon
                                        type='qr'
                                        className={styles.icon}
                                    />
                                </div>
                            </div>
                        )
                        : (
                            <a
                                className={styles.iconContainer}
                                href={value}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <SvgIcon type='link' className={styles.icon} />
                            </a>
                        )
                    }
                </div>
            );
        });
    };

    const renderDonate = () => {
      const donateArray = Object.values(DONATE);
  
      return donateArray.map((el, index) => {
        const { title, items } = el;
  
        return (
            <div
                key={title}
                className={styles.donateBox}
            >
                <span
                    className={styles.title}
                    onClick={handleChangeVisibility(index)}
                >{title}</span>

                <div className={classNames(styles.linksContainer, {
                    [styles.linksContainer_visible]: index === 0
                        ? isVisibleState.crypto
                        : isVisibleState.currency
                })}>
                    {renderDonateItems(items)}
                </div>
            </div>
        );
      });
    }

    return (
        <div className={styles.container}>
            {renderDonate()}
        </div>
    );
}

export default Donate;
