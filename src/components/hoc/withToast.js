import React from 'react';

import Toast from '../base/Toast';

export function WithToast({ children }) {
    return (
        <>
            {children}

            <Toast />
        </>
    );
}
