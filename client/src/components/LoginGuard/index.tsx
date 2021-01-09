import React, { useEffect } from 'react';
import { matchPath, useHistory } from 'react-router-dom';

import { auth } from 'src/utils';


interface IProps {
    loginPagePath: string;
    sharedUrls: string[];
}

export const LoginGuard: React.FC<IProps> = ({
    sharedUrls,
    loginPagePath,
}) => {
    const { push: historyPush, location } = useHistory();

    useEffect(() => {
        if (auth.isAuthorized()) {
            return;
        }

        const isInBlockedUrl = !matchPath(location.pathname, sharedUrls);
        if (isInBlockedUrl) {
            historyPush(loginPagePath);
        }
    }, [location, loginPagePath, sharedUrls, historyPush]);

    return null;
};
