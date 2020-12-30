import React from 'react';
import { makeStyles } from '@material-ui/core';


const useClasses = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
}));

export const Header: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>Header</div>
    );
};
