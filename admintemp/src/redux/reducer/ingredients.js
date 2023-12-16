import {
    ADD_INGREDIENTS,GET_INGREDIENTS,GET_INGREDIENTSS,DELETE_INGREDIENTS,ERROR_INGREDIENTS
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    ingredients: [],
    ingredient: null,
    error: {},
  };
  export const ingredients= (state = initialState, action) =>{


    const { type, payload } = action;
  
    switch (type) {
      case GET_INGREDIENTSS:
            return {
                ...state,
                ingredients: payload,
                loading: false,
            };
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredient: payload,
                loading: false,
            };
      case ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [payload,...state.ingredients],
                loading: false,
            };
            case DELETE_INGREDIENTS:
                return {
                  ...state,
                  ingredients: state.ingredients.filter((ingredient) => ingredient._id !== payload._id),                  
                  loading: false,
                };
           
              case ERROR_INGREDIENTS:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                };
                default:
                    return state;
    }
  }
