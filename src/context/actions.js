export const AUTHENTICATED = 'AUTHENTICATED';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_CHANNEL_ID = 'UPDATE_CHANNEL_ID';
export const UPDATE_CHANNEL_TITLE = 'UPDATE_CHANNEL_TITLE';
export const UPDATE_CHANNEL_DESCRIPTION = 'UPDATE_CHANNEL_DESCRIPTION';
export const UPDATE_INPUT_TEXT_MESSAGE = 'UPDATE_INPUT_TEXT_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CLEAR_GLOBAL_STATE = 'CLEAR_GLOBAL_STATE';

export const getActions = (dispatch) => ({
  authenticate: () => dispatch({ type: AUTHENTICATED }),
  updateEmail: (email) => dispatch({ type: UPDATE_EMAIL, email }),
  updatePassword: (password) => dispatch({ type: UPDATE_PASSWORD, password }),
  updateFirstName: (firstName) => dispatch({ type: UPDATE_FIRST_NAME, firstName}),
  updateLastName: (lastName) => dispatch({ type: UPDATE_LAST_NAME, lastName }),
  updateChannelId: (id) => dispatch({ type: UPDATE_CHANNEL_ID, id}),
  updateChannelTitle: (title) => dispatch({ type: UPDATE_CHANNEL_TITLE, title}),
  updateChannelDescription: (description) => dispatch({ type: UPDATE_CHANNEL_DESCRIPTION, description }),
  updateInputMessage: (text) => dispatch({ type: UPDATE_INPUT_TEXT_MESSAGE, text}),
  sendTextMessage: (message) => dispatch({ type: SEND_MESSAGE, message}),
  clearGlobalState: () => dispatch({ type: CLEAR_GLOBAL_STATE }),
});