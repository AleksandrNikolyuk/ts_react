import React from 'react'
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    list: {
        width: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
    },
    blockItem: {
        width: '200px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',

    },
    noDecor: {
        textDecoration: 'none',
    }
});

export const NavbarMenu: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ul className={classes.list}>
                <NavLink className={classes.noDecor} to='/'>
                    <li className={classes.blockItem}>TODO</li>
                </NavLink>
                <NavLink className={classes.noDecor} to='/about'>
                    <li className={classes.blockItem}>ABOUT</li>
                </NavLink>
            </ul>
        </div>
    )
}

