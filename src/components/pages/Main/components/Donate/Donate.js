import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';

import * as toastActions from '../../../../../actions/toast';

import SvgIcon from '../../../../base/SvgIcon';

import { DONATE } from '../../../../../utils/constants/donate';

import styles from './Donate.module.scss';

function Donate({ setIsVisible, updateMessage }) {
    const [isVisibleState, setIsVisibleState] = useState({ crypto: false, currency: false });

    const dispatch = useDispatch();

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
        dispatch(updateMessage('Address was copied'));
        dispatch(setIsVisible(true));
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
                            <div className={styles.iconsContainer}>
                                <a
                                    className={styles.iconContainer}
                                    href={value}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <SvgIcon type='link' className={styles.icon} />
                                </a>
                            </div>
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
                <div
                    className={styles.titleContainer}
                    onClick={handleChangeVisibility(index)}
                >
                    <span className={styles.title}>{title}</span>

                    <div className={classNames(styles.indicator, {
                        [styles.indicatorOpened]: index === 0
                            ? isVisibleState.crypto
                            : isVisibleState.currency
                    })}>
                        <div className={styles.indicatorItem} />
                    </div>
                </div>

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

export default connect(
    null,
    { ...toastActions }
)(Donate);
