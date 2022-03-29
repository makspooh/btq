import React from 'react';
import classNames from 'classnames';

import styles from './Base.module.scss';

function Base({ views, isVisible, modals, setIsModalVisible, setModalViews }) {
    const Modal = modals[views[0]?.type];

    const handleClose = () => {
        setIsModalVisible(false);

        setTimeout(() => {
            setModalViews([]);
        }, 500);
    }

    return (
        <div
            className={classNames(styles.container, {
                [styles.container_visible]: isVisible
            })}
            onClick={handleClose}
        >
            <div className={classNames(styles.wrapper, {
                [styles.wrapper_visible]: isVisible
            })}>
                {Modal && (
                    <Modal views={views} />
                )}
            </div>
        </div>
    );
}

export default Base;
