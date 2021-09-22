import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalState from '../../context/GlobalState';
import PrivateRoute from './PrivateRoute'
import LogIn from '../LogIn';
import MainPage from '../MainPage';
import NewChannel from '../NewChannel';
import UserSettings from '../UserSettings';

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className='wrapper'>
          <Switch>
            <Route path='/login' component={LogIn} />
            <PrivateRoute exact path='/' component={MainPage} />
            <PrivateRoute path='/main-page' component={MainPage} />
            <PrivateRoute path='/new-channel/:id' component={NewChannel} />
            <PrivateRoute path='/user-settings' component={UserSettings} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
