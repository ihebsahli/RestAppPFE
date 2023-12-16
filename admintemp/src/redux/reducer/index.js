import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import {ingredients} from './ingredients';
import {tables} from './tables';
import {produits} from './produits';
import {reservations} from './reservation';


export default combineReducers({
  alert,
  auth,
  ingredients,
  tables,
  produits,
  reservations,

});