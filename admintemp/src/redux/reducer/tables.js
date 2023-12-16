import {
    ADD_TABLES,GET_TABLES,GET_TABLESS,DELETE_TABLES,ERROR_TABLES
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    tables: [],
    table: null,
    error: {},
  };
  export const tables= (state = initialState, action) =>{


    const { type, payload } = action;
  
    switch (type) {
      case GET_TABLESS:
            return {
                ...state,
                tables: payload,
                loading: false,
            };
        case GET_TABLES:
            return {
                ...state,
                table: payload,
                loading: false,
            };
      case ADD_TABLES:
            return {
                ...state,
                tables: [payload,...state.tables],
                loading: false,
            };
            case DELETE_TABLES:
                return {
                  ...state,
                  tables: state.tables.filter((table) => table._id !== payload._id),                  
                  loading: false,
                };
           
              case ERROR_TABLES:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                };
                default:
                    return state;
    }
  }
