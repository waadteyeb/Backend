import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/v1/categories');

    dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_CATEGORIES_FAIL', payload: error.message });
  }
};

export const createCategory = (name) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:8000/api/categories', { name });

    dispatch({ type: 'CREATE_CATEGORY_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_CATEGORY_FAIL', payload: error.message });
  }
};

export const updateCategory = (id, name) => async (dispatch) => {
  try {
    const { data } = await axios.put(`http://localhost:8000/api/v1/categories/${id}`, { name });

    dispatch({ type: 'UPDATE_CATEGORY_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_CATEGORY_FAIL', payload: error.message });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/api/categories/${id}`);

    dispatch({ type: 'DELETE_CATEGORY_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'DELETE_CATEGORY_FAIL', payload: error.message });
  }
};

