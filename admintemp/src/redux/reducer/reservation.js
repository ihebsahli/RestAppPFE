import {
    ADD_RESERVATIONS,GET_RESERVATIONS,GET_RESERVATIONSS,DELETE_RESERVATIONS,ERROR_RESERVATIONSS
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    reservations: [],
    reservation: null,
    error: {},
  };
  export const reservations= (state = initialState, action) =>{


    const { type, payload } = action;
  
    switch (type) {
      case GET_RESERVATIONSS:
            return {
                ...state,
                reservations: payload,
                loading: false,
            };
        case GET_RESERVATIONS:
            return {
                ...state,
                reservation: payload,
                loading: false,
            };
      case ADD_RESERVATIONS:
            return {
                ...state,
                reservations: [payload,...state.reservations],
                loading: false,
            };
            case DELETE_RESERVATIONS:
                return {
                  ...state,
                  reservations: state.reservations.filter((reservation) => reservation._id !== payload._id),                  
                  loading: false,
                };
           
              case ERROR_RESERVATIONSS:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                };
                default:
                    return state;
    }
  }
