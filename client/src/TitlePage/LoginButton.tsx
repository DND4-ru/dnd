import React from 'react';
import { makeStyles } from '@material-ui/core';

import googleIcon from 'src/static/googleIcon.png';


const useClasses = makeStyles((theme) => ({
    root: {
        background: 'rgba(129, 161, 225, 0.3)',
        borderRadius: '7px',
        padding: '28px 46px',
    },
    button: {
        padding: '6px 25px',
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        border: '1px solid rgba(129, 161, 225, 0.3)',
        boxShadow: '7px 7px 10px rgba(129, 161, 225, 0.5)',
        '&>*:not(:last-child)': {
            marginRight: '14px',
        },
        cursor: 'pointer',
        borderRadius: '7px',
    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '22px',
        color: '#555555',
    },
}));

export const LoginButton: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <div className={classes.button}>
                <span className={classes.buttonText}>
                    Войти с помощью
                </span>
                <img src={googleIcon} alt="G" />
            </div>
        </div>
    );
};
