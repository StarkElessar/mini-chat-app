import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import MainPage from './MainPage';

function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <Route exact path='/' render={LogIn} />
        <Route exact path='/main-page' render={MainPage} />

      </div>
    </BrowserRouter>
  );
}

export default App;
