import React from 'react';
import { makeStyles } from '@material-ui/core';


const useClasses = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        height: theme.spacing(3),
    },
    body: {
        flexGrow: 1,
    },
}));

interface IProps {
    header: React.ReactChild;
    body: React.ReactChild;

    classes?: Partial<ReturnType<typeof useClasses>>;
}

export const HeaderAndBody: React.FC<IProps> = ({
    classes,
    header,
    body,
}) => {
    const ownClasses = useClasses(classes);

    return (
        <div className={ownClasses.root}>
            <header className={ownClasses.header}>{header}</header>
            <article className={ownClasses.body}>{body}</article>
        </div>
    );
};
