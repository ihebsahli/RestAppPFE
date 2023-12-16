import {
    ADD_PRODUITS,GET_PRODUITS,GET_PRODUITSS,DELETE_PRODUITS,ERROR_PRODUITS
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    produits: [],
    produit: null,
    error: {},
  };
  export const produits= (state = initialState, action) =>{


    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUITSS:
            return {
                ...state,
                produits: payload,
                loading: false,
            };
        case GET_PRODUITS:
            return {
                ...state,
                produit: payload,
                loading: false,
            };
      case ADD_PRODUITS:
            return {
                ...state,
                produits: [payload,...state.produits],
                loading: false,
            };
            case DELETE_PRODUITS:
                return {
                  ...state,
                  produits: state.produits.filter((produit) => produit._id !== payload._id),                  
                  loading: false,
                };
           
              case ERROR_PRODUITS:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                };
                default:
                    return state;
    }
  }
