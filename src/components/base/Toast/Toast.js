import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as toastActions from '../../../actions/toast';

import styles from './Toast.module.scss';

function Toast({ isVisible, message, setIsVisible, updateMessage }) {
    useEffect(() => {
        handleVisibilityChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    function handleVisibilityChange() {
        if (isVisible) {
            setTimeout(() => {
                setIsVisible(false);

                setTimeout(() => {
                    updateMessage('');
                }, 1000);
            }, 2000);
        }
    }

    return (
        <div className={classNames(styles.container, {
            [styles.container_visible]: isVisible
        })}>
            <div className={classNames(styles.toast, {
                [styles.toast_visible]: isVisible
            })}>
                <span className={styles.message}>{message}</span>
            </div>
        </div>
    );
}

export default connect(
    (state) => ({
        isVisible: state.toast.isVisible,
        message: state.toast.message
    }),
    { ...toastActions }
)(Toast);
