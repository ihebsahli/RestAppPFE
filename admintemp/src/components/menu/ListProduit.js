import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../layout/Sidebar';
import ProduitForm from './Produit';
import { getProduitss, deleteProduits } from '../../redux/actions/produits';
import '../menu/produit.css';

function ListProduit() {

    const dispatch = useDispatch();

    const [Search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const produit = useSelector((state) => state.produits);

    const { produits, loading } = produit;

    useEffect(() => {
        dispatch(getProduitss())
    }, [dispatch])

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteProduits(id))
    };


    return loading || produits === [] ? <h1>LOADING...</h1> : (
        <div class="layout-inner">

            <Sidebar />

            <div class="layout-content">

                <ProduitForm />

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Listes des Produits</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Menu</li>
                            <li class="breadcrumb-item active">Listes des Produits</li>
                        </ol>
                    </div>
                    <div class="card" style={{ inlineSize: '90%' }}>
                        <div class="card-header">Les Produits</div>
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
                        <div class="table-wrapper">
                            <table class="table card-table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Nom de produit</th>
                                        <th>Description</th>
                                        <th>Catégorie</th>
                                        <th>Prix</th>
                                        <th>Ingrédients</th>
                                        <th>Disponibilité</th>
                                        <th>Temps de préparation</th>
                                        <th>Image</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produits.filter(el => el.nomPlat.toLowerCase().includes(Search.toLowerCase())).map((x, i) =>
                                        <tr>
                                            <td>{x.nomPlat}</td>
                                            <td>{x.description}</td>
                                            <td>{x.categorie}</td>
                                            <td>{x.prix}</td>
                                            <td>{x.ingredients}</td>
                                            <td>{x.disponibilite ? "disponible" : "non disponible"}</td>
                                            <td>{x.tempsPreparation}</td>
                                            <td><img src={`http://localhost:5000/plat/${x.image}`} alt="img" style={{ width: '50px', height: '50px' }} /></td>
                                            <td>
                                                <button className='btn btn-danger feather icon-x-square' onClick={e => handleDelete(e, x._id)} ></button>
                                                <button className='btn btn-success feather icon-upload-cloud' ></button>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProduit