import {
  SET_IS_AUTHENTICATED,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_CHANNEL_TITLE,
  UPDATE_CHANNEL_DESCRIPTION,
  CLEAR_GLOBAL_STATE,
  UPDATE_USER_NAME,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  SEND_TEXT_MESSAGE,
  UPDATE_INPUT_TEXT_MESSAGE
} from './actions';

export const initialState = {
  email: '',
  password: '',
  isAuthenticated: false,
  channelTitle: '',
  channelDescription: '',
  userName: 'Stark',
  firstName: '',
  lastName: '',
  channelMessages: [],
  textMessage: '',
  sendTextMessage: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_PASSWORD:
      return { ...state, password: action.password };
    case SET_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.isAuthenticated };
    case UPDATE_CHANNEL_TITLE:
      return { ...state, channelTitle: action.title };
    case UPDATE_CHANNEL_DESCRIPTION:
      return { ...state, channelDescription: action.description };
    case CLEAR_GLOBAL_STATE:
      return initialState;
    case UPDATE_USER_NAME:
      return { ...state, userName: action.userName};
    case UPDATE_FIRST_NAME:
      return { ...state, firstName: action.firstName};
    case UPDATE_LAST_NAME:
      return { ...state, lastName: action.lastName };
    case UPDATE_INPUT_TEXT_MESSAGE:
      return { ...state, textMessage: action.textMessage };
    case SEND_TEXT_MESSAGE:
      return { ...state, sendTextMessage: action.sendText };
    default:
      return state;
  }
};
