import axios from "axios";

const listNotifications = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("http://localhost:8000/api/notifications", config);

    dispatch({ type: "NOTIFICATIONS_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "NOTIFICATIONS_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const createNotification = (recipient, message, createdAt) => async (
  dispatch,
  getState
) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/notifications",
      { recipient, message, createdAt },
      config
    );

    dispatch({ type: "NOTIFICATION_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "NOTIFICATION_CREATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const deleteNotification = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`http://localhost:8000/api/notifications/${id}`, config);

    dispatch({ type: "NOTIFICATION_DELETE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "NOTIFICATION_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { listNotifications, createNotification, deleteNotification };
