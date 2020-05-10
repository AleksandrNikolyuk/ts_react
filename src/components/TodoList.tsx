import React from 'react'
import {
    Checkbox,
    makeStyles,
    Theme,
    createStyles
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ITodo } from '../interfaces'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            listStyle: 'none',
        },
        noItems: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

type TodoListProps = {
    todos: ITodo[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    const classes = useStyles();

    if (todos.length === 0) {
        return (
            <div className={classes.noItems}>
                <h1>No items now</h1>
            </div>
        )
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul className={classes.root}>
            {todos.map(todo => {
                const classes = ['todo']

                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <div>
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={onToggle.bind(null, todo.id)}
                                />
                                <span>{todo.title}</span>
                            </div>
                            <HighlightOffIcon
                                onClick={event => removeHandler(event, todo.id)}
                            />
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}