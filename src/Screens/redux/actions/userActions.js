import { User } from '../../models/User';

// Action Types
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

// Action Creators
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});

// Thunk Actions
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setCurrentUser(data.user));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setCurrentUser(data.user));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setCurrentUser(null));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserInfo = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/users/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setCurrentUser(data.user));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addNotificationToUser = (notification) => async (dispatch, getState) => {
  try {
    const user = getState().user.currentUser;
    if (user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { notifications: notification } },
        { new: true }
      );
      dispatch(setCurrentUser(updatedUser));
    }
  } catch (error) {
    console.error(error);
  }
};
