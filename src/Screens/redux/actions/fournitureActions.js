import axios from 'axios';

// Action Types
export const GET_FOURNITURES_REQUEST = 'GET_FOURNITURES_REQUEST';
export const GET_FOURNITURES_SUCCESS = 'GET_FOURNITURES_SUCCESS';
export const GET_FOURNITURES_FAILURE = 'GET_FOURNITURES_FAILURE';

export const GET_FOURNITURE_REQUEST = 'GET_FOURNITURE_REQUEST';
export const GET_FOURNITURE_SUCCESS = 'GET_FOURNITURE_SUCCESS';
export const GET_FOURNITURE_FAILURE = 'GET_FOURNITURE_FAILURE';

export const CREATE_FOURNITURE_REQUEST = 'CREATE_FOURNITURE_REQUEST';
export const CREATE_FOURNITURE_SUCCESS = 'CREATE_FOURNITURE_SUCCESS';
export const CREATE_FOURNITURE_FAILURE = 'CREATE_FOURNITURE_FAILURE';

export const UPDATE_FOURNITURE_REQUEST = 'UPDATE_FOURNITURE_REQUEST';
export const UPDATE_FOURNITURE_SUCCESS = 'UPDATE_FOURNITURE_SUCCESS';
export const UPDATE_FOURNITURE_FAILURE = 'UPDATE_FOURNITURE_FAILURE';

export const DELETE_FOURNITURE_REQUEST = 'DELETE_FOURNITURE_REQUEST';
export const DELETE_FOURNITURE_SUCCESS = 'DELETE_FOURNITURE_SUCCESS';
export const DELETE_FOURNITURE_FAILURE = 'DELETE_FOURNITURE_FAILURE';

// Action Creators
export const getFournitures = (location, category) => async (dispatch) => {
  dispatch({ type: GET_FOURNITURES_REQUEST });

  try {
    const res = await axios.get('http://localhost:8000/api/v1/fournitures', {
      params: { location, category },
    });
    dispatch({
      type: GET_FOURNITURES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_FOURNITURES_FAILURE,
      payload: err.response.data,
    });
  }
};

export const getFourniture = (id) => async (dispatch) => {
  dispatch({ type: GET_FOURNITURE_REQUEST });

  try {
    const res = await axios.get(`http://localhost:8000/api/v1/fournitures${id}`);
    dispatch({
      type: GET_FOURNITURE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_FOURNITURE_FAILURE,
      payload: err.response.data,
    });
  }
};

export const createFourniture = (fourniture) => async (dispatch) => {
  dispatch({ type: CREATE_FOURNITURE_REQUEST });

  try {
    const res = await axios.post('http://localhost:8000/api/v1/fournitures', fourniture);
    dispatch({
      type: CREATE_FOURNITURE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CREATE_FOURNITURE_FAILURE,
      payload: err.response.data,
    });
  }
};

export const updateFourniture = (id, fourniture) => async (dispatch) => {
  dispatch({ type: UPDATE_FOURNITURE_REQUEST });

  try {
    const res = await axios.put(`http://localhost:8000/api/v1/fournitures${id}`, fourniture);
    dispatch({
      type: UPDATE_FOURNITURE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_FOURNITURE_FAILURE,
      payload: err.response.data,
    });
  }
};

export const deleteFourniture = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:8000/api/v1/fournitures${id}`);
    dispatch({ type: DELETE_FOURNITURE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_FOURNITURE_FAIL, payload: error.response.data });
  }
};

