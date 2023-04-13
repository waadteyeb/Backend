import {
  NOTIFICATIONS_LIST_SUCCESS,
  NOTIFICATIONS_LIST_FAIL,
  NOTIFICATION_CREATE_SUCCESS,
  NOTIFICATION_CREATE_FAIL,
  NOTIFICATION_DELETE_SUCCESS,
  NOTIFICATION_DELETE_FAIL,
} from "../constants/notificationConstants";

const initialState = {
  notifications: [],
  error: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_LIST_SUCCESS:
      return { ...state, notifications: action.payload, error: null };
    case NOTIFICATIONS_LIST_FAIL:
      return { ...state, notifications: [], error: action.payload };
    case NOTIFICATION_CREATE_SUCCESS:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
        error: null,
      };
    case NOTIFICATION_CREATE_FAIL:
      return { ...state, error: action.payload };
    case NOTIFICATION_DELETE_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification._id !== action.payload
        ),
        error: null,
      };
    case NOTIFICATION_DELETE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default notificationReducer;
