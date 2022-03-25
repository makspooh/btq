import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ABOUT, ARTISTS, MIXES } from '../../utils/constants/routes';

export function WithRedirect({ children }) {
    const navigate = useNavigate();
    const { pathname } = window.location;
    const routes = useMemo(() => [ARTISTS, MIXES, ABOUT], []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handleRedirect, [pathname]);

    function handleRedirect() {
        const isRedirect = !routes.includes(pathname);

        if (isRedirect) {
            navigate(ABOUT);
        }
    }

    return (
        <>{children}</>
    );
}
