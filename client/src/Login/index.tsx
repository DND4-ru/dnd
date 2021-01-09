import React from 'react';
import { makeStyles } from '@material-ui/core';

import backgroundPicture from 'src/static/background.png';

import { Header } from './Header';
import { LoginButton } from './LoginButton';


const useClasses = makeStyles(() => ({
    root: {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        background: `no-repeat url("${backgroundPicture}")`,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export const Login: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.body}>
                <LoginButton />
            </div>
        </div>
    );
};
