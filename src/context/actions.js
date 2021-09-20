export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const UPDATE_CHANNEL_TITLE = 'UPDATE_CHANNEL_TITLE';
export const UPDATE_CHANNEL_DESCRIPTION = 'UPDATE_CHANNEL_DESCRIPTION';
export const CLEAR_GLOBAL_STATE = 'CLEAR_GLOBAL_STATE';
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_INPUT_TEXT_MESSAGE = 'UPDATE_INPUT_TEXT_MESSAGE';
export const SEND_TEXT_MESSAGE = 'SEND_TEXT_MESSAGE';

export const getActions = (dispatch) => ({
  updateEmail: (email) => dispatch({ type: UPDATE_EMAIL, email }),
  updatePassword: (password) => dispatch({ type: UPDATE_PASSWORD, password }),
  setIsAuthenticated: (isAuthenticated) => dispatch({ type: SET_IS_AUTHENTICATED, isAuthenticated }),
  updateChannelTitle: (title) => dispatch({ type: UPDATE_CHANNEL_TITLE, title}),
  updateChannelDescription: (description) => dispatch({ type: UPDATE_CHANNEL_DESCRIPTION, description }),
  clearGlobalState: () => dispatch({ type: CLEAR_GLOBAL_STATE }),
  updateUserName: (userName) => dispatch({ type: UPDATE_USER_NAME, userName}),
  updateFirstName: (firstName) => dispatch({ type: UPDATE_FIRST_NAME, firstName}),
  updateLastName: (lastName) => dispatch({ type: UPDATE_LAST_NAME, lastName }),
  updateInputTextMessage: (text) => dispatch({ type: UPDATE_INPUT_TEXT_MESSAGE, text}),
  sendTextMessage: (sendText) => dispatch({ type: SEND_TEXT_MESSAGE, sendText})
});
