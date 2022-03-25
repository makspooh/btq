import React from 'react';
import classNames from 'classnames';

import styles from './Artist.module.scss';
import SvgIcon from '../../../../base/SvgIcon';

function Artist({ artistItem, handleClick }) {
    const { name, icons, isOpen } = artistItem;

    const renderLinks = (icons) => {
        return (
            <div className={classNames(styles.icons_hidden, {
                [styles.icons_visible]: isOpen
            })}>
                {icons.map((link) => {
                    const { type, path } = link;

                    return (
                        <a
                            key={path}
                            href={path}
                            target='_blank'
                            rel='noreferrer'
                            className={styles.link}
                        >
                            <SvgIcon
                                type={type}
                                className={styles.icon}
                            />
                        </a>
                    );
                })}
            </div>
        );
    }

    return (
        <div
            key={name}
            className={styles.artist}
        >
            <div
                className={styles.nameContainer}
                onClick={handleClick(artistItem)}
            >
                <span className={styles.name}>{name}</span>

                <div className={classNames(styles.indicator, {
                    [styles.indicatorOpened]: isOpen
                })}>
                    <div className={styles.indicatorItem} />
                </div>
            </div>
            
            {renderLinks(icons)}
        </div>
    );
}

export default Artist;
