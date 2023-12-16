import axios from 'axios';
import { SetAlert } from './alert';


import {
    ADD_INGREDIENTS,GET_INGREDIENTS,GET_INGREDIENTSS,EDIT_INGREDIENTS,DELETE_INGREDIENTS,ERROR_INGREDIENTS
} from '../actions/Types';


export const addIngredientss= (formData) => async (dispatch) => {
   const config = {
    headers: { 'content-type': 'multipart/form-data' }

  };
  
    try {
      const res = await axios.post(
        `/ingredients/addingredient/`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_INGREDIENTS,
        payload: res.data,
      });
      dispatch(SetAlert('Ingredients Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;


        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_INGREDIENTS
    });
    }
  };


  export const getIngredients = (id) => async (dispatch) => {


    try {
      const res = await axios.get(
        `/ingredient/${id}`,
      );
      dispatch({
        type: GET_INGREDIENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_INGREDIENTS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const getIngredientss= () => async (dispatch) => {


    try {
      const res = await axios.get(`/ingredients/allingredient`,
      );
      dispatch({
        type: GET_INGREDIENTSS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_INGREDIENTS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  export const deleteIngredients= (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/ingredients/deleteingredient/${id}`);
  
      dispatch({
        type: DELETE_INGREDIENTS,
        payload: res.data,
      });
      dispatch(SetAlert('Ingredients Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_INGREDIENTS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
    dispatch(getIngredientss())
};
  export const editIngredients= (id,nomIgredient,prix,image) => async (dispatch) => {
    try {
   await axios.put(`/ingredient/${id}`, {nomIgredient,prix,image},);
  
      dispatch({
        type: EDIT_INGREDIENTS,
      });
      dispatch(SetAlert('Ingredients Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_INGREDIENTS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



