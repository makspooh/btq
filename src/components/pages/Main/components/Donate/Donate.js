import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import classNames from 'classnames';

import * as toastActions from '../../../../../actions/toast';
import * as modalActions from '../../../../../actions/modal';

import SvgIcon from '../../../../base/SvgIcon';

import { DONATE } from '../../../../../utils/constants/donate';

import styles from './Donate.module.scss';

function Donate({ setIsToastVisible, updateToastMessage, setIsModalVisible, setModalViews }) {
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();

    const handleChangeVisibility = () => {
        setIsVisible(prev => !prev);
    }

    const handleCopy = (value) => () => {
        navigator.clipboard.writeText(value);
        dispatch(updateToastMessage('Address has been copied'));
        dispatch(setIsToastVisible(true));
    }

    const handleShowQr = (data) => () => {
        setModalViews([{ type: 'cryptoQr', params: data }]);
        setIsModalVisible(true);
    }

    const renderDonateItems = (items) => {
        return items.map((el) => {
            const { type, title, value } = el;

            return (
                <div
                    key={title}
                    className={styles.linkContainer}
                >
                    <span className={styles.link}>
                        {title.toUpperCase()}
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
                                        onClick={handleShowQr(title)}
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
        const { title, items } = DONATE;
  
        return (
            <div
                key={title}
                className={styles.donateBox}
            >
                <div
                    className={styles.titleContainer}
                    onClick={handleChangeVisibility}
                >
                    <span className={styles.title}>{title}</span>

                    <div className={classNames(styles.indicator, {
                        [styles.indicatorOpened]: isVisible
                    })}>
                        <div className={styles.indicatorItem} />
                    </div>
                </div>

                <div className={classNames(styles.linksContainer, {
                    [styles.linksContainer_visible]: isVisible
                })}>
                    {renderDonateItems(items)}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {renderDonate()}
        </div>
    );
}

export default connect(
    null,
    { ...toastActions, ...modalActions }
)(Donate);
