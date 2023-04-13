import { combineReducers } from 'redux';

const initialUserState = {
  isLoggedIn: false,
  currentUser: null,
  notifications: [],
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  
});

export default rootReducer;
