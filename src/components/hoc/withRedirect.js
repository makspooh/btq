import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ABOUT, ARTISTS, MIXES } from '../../utils/constants/routes';

export function WithRedirect({ children }) {
    const navigate = useNavigate();
    const { hash } = window.location;
    const routes = useMemo(() => [ARTISTS, MIXES, ABOUT], []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handleRedirect, [hash]);

    function handleRedirect() {
        const isRedirect = !routes.includes(hash.replace('#', ''));

        if (isRedirect) {
            navigate(ABOUT);
        }
    }

    return (
        <>{children}</>
    );
}
