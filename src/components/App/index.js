import React from 'react';
import './style.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import GlobalState from '../../context/GlobalState';
import LogIn from '../LogIn';
import MainPage from '../MainPage';
import NewChannel from '../NewChannel';
import PrivateRoute from './PrivateRoute'
import UserSettings from '../UserSettings';

const App = (props) => {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className='wrapper'>
          <Route path='/login' component={LogIn} />
          <PrivateRoute path='/main-page' component={MainPage} />
          <PrivateRoute path='/new-channel' component={NewChannel} />
          <PrivateRoute path='/settings' component={UserSettings} />
          <Redirect to="/login" />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
