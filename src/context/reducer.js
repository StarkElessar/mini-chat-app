import { fromJS, Map } from 'immutable';
import {
  AUTHENTICATED,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_CHANNEL_ID,
  UPDATE_CHANNEL_TITLE,
  UPDATE_CHANNEL_DESCRIPTION,
  UPDATE_INPUT_TEXT_MESSAGE,
  SEND_MESSAGE,
  CLEAR_GLOBAL_STATE,
} from './actions';

export const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  user: {
    email: '',
    password: '',
    firstName: 'Stark',
    lastName: '',
    avatar: 'https://themified.com/friend-finder/images/users/user-4.jpg',
  },
  channel: {
    id: null,
    title: '',
    description: '',
    inputTextMessage: '',
    messages: [],
  },
};

export const reducer = (state, action) => {
  const immutableState = fromJS(state);

  switch (action.type) {
    case AUTHENTICATED:
      return immutableState.setIn(['isAuthenticated'], true).toJS();
    case UPDATE_EMAIL:
      return immutableState.setIn(['user', 'email'], action.email).toJS();
    case UPDATE_PASSWORD:
      return immutableState.setIn(['user', 'password'], action.password).toJS();
    case UPDATE_FIRST_NAME:
      return immutableState.setIn(['user', 'firstName'], action.firstName).toJS();
    case UPDATE_LAST_NAME:
      return immutableState.setIn(['user', 'lastName'], action.lastName).toJS();
    case UPDATE_CHANNEL_ID:
      return immutableState.setIn(['channel', 'id'], action.id).toJS();
    case UPDATE_CHANNEL_TITLE:
      return immutableState.setIn(['channel', 'title'], action.title).toJS();
    case UPDATE_CHANNEL_DESCRIPTION:
      return immutableState.setIn(['channel', 'description'], action.description).toJS();
    case UPDATE_INPUT_TEXT_MESSAGE:
      return immutableState.setIn(['channel', 'inputTextMessage'], action.text).toJS();
    case SEND_MESSAGE:
      return immutableState.updateIn(['channel', 'messages'], (messages) => (
          messages.push(Map({
            id: immutableState.getIn(['channel', 'messages']).size + 1,
            ...action.message
          }))
        )
      ).toJS();
    case CLEAR_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};