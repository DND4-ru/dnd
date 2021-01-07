import React from 'react';
import { makeStyles } from '@material-ui/core';


const useClasses = makeStyles((theme) => ({
    root: {
        width: theme.spacing(160),
        minHeight: '100%',
    },
}));

interface IProps {
    classes?: Partial<ReturnType<typeof useClasses>>;
}

export const Root: React.FC<IProps> = ({ classes = {}, children }) => {
    const ownClasses = useClasses(classes);

    return (
        <div className={ownClasses.root}>
            {children}
        </div>
    );
};
