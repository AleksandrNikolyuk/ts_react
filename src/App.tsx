import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavbarMenu } from './components/NavbarMenu';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { TodoPage } from './pages/TodoPage';
import { AboutPage } from './pages/AboutPage';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <NavbarMenu />
      <div className={classes.root}>
        <Switch>
          <Route component={TodoPage} path='/' exact />
          <Route component={AboutPage} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
