import axios from 'axios';
import { SetAlert } from './alert';


import {
    ADD_RESERVATIONS,GET_RESERVATIONS,GET_RESERVATIONSS,EDIT_RESERVATIONS,DELETE_RESERVATIONS,ERROR_RESERVATIONSS
} from '../actions/Types';


export const addReservationss= (nomComplet,numeroTelephone,dateReservation,heureReservationheureReservation,nombrePersonnes,numeroTable) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/reservations/addreservation/`,
        {nomComplet,numeroTelephone,dateReservation,heureReservationheureReservation,nombrePersonnes,numeroTable},
        config
      );
  
      dispatch({
        type: ADD_RESERVATIONS,
        payload: res.data,
      });
      dispatch(SetAlert('Reservations Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;


        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_RESERVATIONSS
    });
    }
  };


  export const getReservations = (id) => async (dispatch) => {


    try {
      const res = await axios.get(
        `/reservation/${id}`,
      );
      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_RESERVATIONSS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const getReservationss= () => async (dispatch) => {


    try {
      const res = await axios.get(`/reservation/list`,
      );
      dispatch({
        type: GET_RESERVATIONSS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_RESERVATIONSS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  export const deleteReservations= (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/reservation/deletereservation/${id}`);
  
      dispatch({
        type: DELETE_RESERVATIONS,
        payload: res.data,
      });
      dispatch(SetAlert('Reservations Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_RESERVATIONSS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
    dispatch(getReservationss())
};
  export const editReservations= (id,nomComplet,numeroTelephone,dateReservation,heureReservationheureReservation,nombrePersonnes,numeroTable) => async (dispatch) => {
    try {
   await axios.put(`/reservation/${id}`, {nomComplet,numeroTelephone,dateReservation,heureReservationheureReservation,nombrePersonnes,numeroTable},);
  
      dispatch({
        type: EDIT_RESERVATIONS,
      });
      dispatch(SetAlert('Reservations Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_RESERVATIONSS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



