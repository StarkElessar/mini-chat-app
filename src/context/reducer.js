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
  const updateUserField = (keyValue) => ({
    ...state,
    user: {
      ...state.user,
      ...keyValue,
    },
  });
  const updateChannelField = (keyValue) => ({
    ...state,
    channel: {
      ...state.channel,
      ...keyValue,
    },
  });
  const addNewMessage = (message) => ({
    ...state,
    channel: {
      ...state.channel,
      messages: [
        ...state.channel.messages,
        {
          id: state.channel.messages.length + 1,
          ...message,
        },
      ],
    },
  });

  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    case UPDATE_EMAIL:
      return updateUserField({
        email: action.email
      });
    case UPDATE_PASSWORD:
      return updateUserField({
        password: action.password
      });
    case UPDATE_FIRST_NAME:
      return updateUserField({
        firstName: action.firstName
      });
    case UPDATE_LAST_NAME:
      return updateUserField({
        lastName: action.lastName
      });
    case UPDATE_CHANNEL_ID:
      return updateChannelField({
        id: action.id
      });
    case UPDATE_CHANNEL_TITLE:
      return updateChannelField({
        title: action.title
      });
    case UPDATE_CHANNEL_DESCRIPTION:
      return updateChannelField({
        description: action.description
      });
    case UPDATE_INPUT_TEXT_MESSAGE:
      return updateChannelField({
        inputTextMessage: action.text
      });
    case SEND_MESSAGE:
      return addNewMessage(action.message);
    case CLEAR_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};