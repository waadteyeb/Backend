import {
  GET_FOURNITURES_REQUEST,
  GET_FOURNITURES_SUCCESS,
  GET_FOURNITURES_FAILURE,
  GET_FOURNITURE_REQUEST,
  GET_FOURNITURE_SUCCESS,
  GET_FOURNITURE_FAILURE,
  CREATE_FOURNITURE_REQUEST,
  CREATE_FOURNITURE_SUCCESS,
  CREATE_FOURNITURE_FAILURE,
  UPDATE_FOURNITURE_REQUEST,
  UPDATE_FOURNITURE_SUCCESS,
  UPDATE_FOURNITURE_FAILURE,
  DELETE_FOURNITURE_REQUEST,
  DELETE_FOURNITURE_SUCCESS,
  DELETE_FOURNITURE_FAILURE
} from './fournitureActions';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  fournitures: [],
  fourniture: null
};

const fournitureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOURNITURES_REQUEST:
    case GET_FOURNITURE_REQUEST:
    case CREATE_FOURNITURE_REQUEST:
    case UPDATE_FOURNITURE_REQUEST:
    case DELETE_FOURNITURE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_FOURNITURES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fournitures: action.payload
      };

    case GET_FOURNITURE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fourniture: action.payload
      };

    case CREATE_FOURNITURE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fournitures: [...state.fournitures, action.payload]
      };

    case UPDATE_FOURNITURE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fournitures: state.fournitures.map(f => {
          if (f._id === action.payload._id) {
            return action.payload;
          } else {
            return f;
          }
        })
      };

    case DELETE_FOURNITURE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fournitures: state.fournitures.filter(f => f._id !== action.payload._id)
      };

    case GET_FOURNITURES_FAILURE:
    case GET_FOURNITURE_FAILURE:
    case CREATE_FOURNITURE_FAILURE:
    case UPDATE_FOURNITURE_FAILURE:
    case DELETE_FOURNITURE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fournitureReducer;
