import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/Sidebar'
import IngredientForm from './Ingredients';
import { getIngredientss, deleteIngredients } from '../../redux/actions/ingredients';
import { useDispatch, useSelector } from 'react-redux';

function ListIngredients() {

    const dispatch = useDispatch();

    const [Search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
      };

    const ingredient = useSelector((state) => state.ingredients);
    
    const { ingredients, loading } = ingredient;
    
    useEffect(() => { dispatch(getIngredientss()) }, [])

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteIngredients(id))
    };


    return loading || ingredients === [] ? <h1>LOADING...</h1> : (

        <div class="layout-inner">

            <Sidebar />
            <IngredientForm />

            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Liste des Ingredients</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Ingredients</li>
                            <li class="breadcrumb-item active">Gestion des Ingredients</li>
                        </ol>
                    </div>
                    <div class="card">

                        <div class="card-header">Les Ingredients</div>
                        <div class="col-md">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" onChange={(e) => handleChange(e)} placeholder="Search for..." />
                                    <span class="input-group-append">
                                        <button class="btn btn-secondary" type="button">Search!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <table class="table card-table">
                            <thead class="thead-light">
                                <tr>
                                    <th>Nom d'Ingredient</th>
                                    <th>Prix</th>
                                    <th>Image</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>


                            <tbody>
                                {ingredients.filter(el => el.nomIngredient.toLowerCase().includes(Search.toLowerCase())).map((x, i) =>
                                    <tr>
                                        <th scope="row">{x.nomIngredient}</th>
                                        <td>{x.prix}</td>
                                        <td><img src={`http://localhost:5000/ingredient/${x.image}`} alt="img" style={{ width: '50px', height: '50px' }} /></td>
                                        <td><button className='btn btn-danger feather icon-x-square' onClick={e => handleDelete(e, x._id)}></button>
                                            <button className='btn btn-success feather icon-upload-cloud'></button>
                                        </td>

                                    </tr>)}




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListIngredients
