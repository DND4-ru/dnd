const tokenKey = {
    access: 'JWTA',
    refresh: 'JWTR',
};
type TokenKeys = keyof typeof tokenKey;

const saveToken = (type: TokenKeys) => (token: string): void => {
    localStorage.setItem(tokenKey[type], token);
};

const getToken = (type: TokenKeys) => (): string | never => {
    const token = localStorage.getItem(tokenKey[type]);

    if (token === null) {
        throw new TypeError('[utils.getToken] Token is absent');
    }

    return token;
};

const isAuthorized = (): boolean => {
    try {
        getToken('access')();
        return true;
    } catch (error) {
        return false;
    }
};


export const auth = {
    saveAccessToken: saveToken('access'),
    saveRefreshToken: saveToken('refresh'),
    getAccessToken: getToken('access'),
    getRefreshToken: getToken('refresh'),
    isAuthorized,
};
