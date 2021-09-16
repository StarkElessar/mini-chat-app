import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import MainPage from './MainPage';
import NewChannel from './NewChannel';

function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <Route exact path='/' component={LogIn} />
        <Route exact path='/main-page' component={MainPage} />
        <Route exact path='/new-channel' component={NewChannel} />

      </div>
    </BrowserRouter>
  );
}

export default App;
