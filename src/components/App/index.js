import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import GlobalState from '../../context/GlobalState';
import PrivateRoute from './PrivateRoute'
import LogIn from '../LogIn';
import MainPage from '../MainPage';
import NewChannel from '../NewChannel';
import UserSettings from '../UserSettings';

const App = () => (
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
)

export default App;
