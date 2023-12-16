import axios from 'axios';
import { SetAlert } from './alert';


import {
    ADD_PRODUITS,GET_PRODUITS,GET_PRODUITSS,EDIT_PRODUITS,DELETE_PRODUITS,ERROR_PRODUITS
} from './Types';


export const addProduitss= (formData) => async (dispatch) => {
   const config = {
    headers: { 'content-type': 'multipart/form-data' }

  };
  
    try {
      const res = await axios.post(
        `/plats/addplat`,
        {formData},
        config
      );
  
      dispatch({
        type: ADD_PRODUITS,
        payload: res.data,
      });
      dispatch(SetAlert('Produits Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;


        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_PRODUITS
    });
    }
  };


  export const getProduits = (id) => async (dispatch) => {


    try {
      const res = await axios.get(
        `/produit/${id}`,
      );
      dispatch({
        type: GET_PRODUITS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUITS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const getProduitss= () => async (dispatch) => {


    try {
      const res = await axios.get(`/plats/allplats`,
      );
      dispatch({
        type: GET_PRODUITSS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUITS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  export const deleteProduits= (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/produits/deleteproduit/${id}`);
  
      dispatch({
        type: DELETE_PRODUITS,
        payload: res.data,
      });
      dispatch(SetAlert('Produits Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUITS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
    dispatch(getProduitss())
};
  export const editProduits= (id,nomPlat,description,categorie,image,prix,ingredients,disponibilite,tempsPreparation) => async (dispatch) => {
    try {
   await axios.put(`/produit/${id}`, {nomPlat,description,categorie,image,prix,ingredients,disponibilite,tempsPreparation},);
  
      dispatch({
        type: EDIT_PRODUITS,
      });
      dispatch(SetAlert('Produits Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUITS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



