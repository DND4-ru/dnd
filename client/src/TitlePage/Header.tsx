import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import logo from 'src/static/logo.png';


const useClasses = makeStyles(() => ({
    root: {
        position: 'relative',
        borderBottom: '3px solid #81A1E1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: '#81A1E1',
        padding: '0 10px',
    },
    text: {
        fontSize: '110px',
        fontWeight: 800,
        fontStyle: 'italic',
        textShadow: '7px 7px 7px rgba(129, 161, 225, 0.47)',
        lineHeight: '110px',
    },
    image: {
        position: 'absolute',
        marginBottom: '6px',
        left: 'calc(50% - 20px)',
        filter: 'drop-shadow(7px 7px 4px rgba(129, 161, 225, 0.51))',
    },
    dungeons: {
        marginBottom: '62px',
    },
    dragons: {
        marginTop: '62px',
    },
}));


export const Header: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <div className={clsx(classes.text, classes.dungeons)}>
                DUNGEONS
            </div>
            <img className={classes.image} src={logo} alt="&" />
            <div className={clsx(classes.text, classes.dragons)}>
                DRAGONS
            </div>
        </div>
    );
};
