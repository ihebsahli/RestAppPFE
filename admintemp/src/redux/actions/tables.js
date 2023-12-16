import axios from 'axios';
import { SetAlert } from './alert';


import {
    ADD_TABLES,GET_TABLES,GET_TABLESS,EDIT_TABLES,DELETE_TABLES,ERROR_TABLES
} from '../actions/Types';


export const addTabless= (capacite,emplacement,etatDisponibilite) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/tables/addtable`,
        {capacite,emplacement,etatDisponibilite},
        config
      );
  
      dispatch({
        type: ADD_TABLES,
        payload: res.data,
      });
      dispatch(SetAlert('Tables Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;


        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_TABLES
    });
    }
  };


  export const getTables = (id) => async (dispatch) => {


    try {
      const res = await axios.get(
        `/tables/gettable/${id}`,
      );
      dispatch({
        type: GET_TABLES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TABLES,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const getTabless= () => async (dispatch) => {


    try {
      const res = await axios.get(`/tables/alltables`,
      );
      dispatch({
        type: GET_TABLESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TABLES,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  export const deleteTables= (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/tables/deletetable/${id}`);
  
      dispatch({
        type: DELETE_TABLES,
        payload: res.data,
      });
      dispatch(SetAlert('Tables Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_TABLES,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      dispatch(getTabless())

    }
    dispatch(getTabless())
};


  export const editTables= (id,capacite,emplacement,etatDisponibilite) => async (dispatch) => {
    try {
   await axios.put(`/tables/updatetable/${id}`, {capacite,emplacement,etatDisponibilite},);
  
      dispatch({
        type: EDIT_TABLES,
      });
      dispatch(SetAlert('Tables Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_TABLES,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



