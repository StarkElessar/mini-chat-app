import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import { getActions } from './actions';
import { initialState, reducer } from './reducer';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = getActions(dispatch);

  return (
    <GlobalContext.Provider value={{ ...state, ...actions }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
