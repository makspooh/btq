import React from 'react';

import Base from '../modals/Base';

export function WithModal({ children }) {
    return (
        <>
            {children}

            <Base />
        </>
    );
}
