import React from 'react';
import { makeStyles } from '@material-ui/core';


const useClasses = makeStyles((theme) => ({
    root: {
        color: 'green',
    },
}));

export const Main: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>Main</div>
    );
};
