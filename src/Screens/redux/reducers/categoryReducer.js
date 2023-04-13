const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_CATEGORIES_FAIL':
      return {
        ...state,
        categories: [],
        loading: false,
        error: action.payload,
      };
    case 'CREATE_CATEGORY_SUCCESS':
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
        error: null,
      };
    case 'CREATE_CATEGORY_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_CATEGORY_SUCCESS':
      const updatedCategories = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        } else {
          return category;
        }
      });
      return {
        ...state,
        categories: updatedCategories,
        loading: false,
        error: null,
      };
    case 'UPDATE_CATEGORY_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_CATEGORY_SUCCESS':
      const filteredCategories = state.categories.filter((category) => {
        return category._id !== action.payload._id;
      });
      return {
        ...state,
        categories: filteredCategories,
        loading: false,
        error: null,
      };
    case 'DELETE_CATEGORY_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;

