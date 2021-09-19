import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import GlobalContext from '../../../context/GlobalContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={({ location }) => (
        isAuthenticated
          ? <Component />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
      )}
    />
  );
};

export default PrivateRoute;