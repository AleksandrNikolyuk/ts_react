import React, { useState } from 'react'
import {
    createStyles,
    makeStyles,
    Theme,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: '50px 0 10px 40px',
                width: '700px',

            },
        },
    }),
);

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const classes = useStyles();


    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className={classes.root}>
            <TextField
                label='Enter item'
                variant="outlined"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}

            />
        </div>
    )
}