import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: '500px',
        margin: '30px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        margin: 0,
    }
});

export const AboutPage: React.FC = () => {
    const classes = useStyles();

    const history = useHistory()
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>About this todo</h1>
            <Button
                variant='contained'
                color='primary'
                onClick={() => history.push('/')}
            >
                Back to todo
            </Button>
        </div>
    )
}