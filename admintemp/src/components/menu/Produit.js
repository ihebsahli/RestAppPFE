import React, { useState } from 'react';
import { addProduitss } from '../../redux/actions/produits';
import { useDispatch } from 'react-redux';

function Produit() {
    const [nomPlat, setNomPlat] = useState('');
    const [prix, setPrix] = useState('');
    const [description, setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [disponibilite, setDisponibilite] = useState('disponible');
    const [tempsPreparation, setTempsPreparation] = useState('');

    const dispatch = useDispatch();

    const handleAddPlat = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nomPlat", nomPlat);
        formData.append("description", description)
        formData.append("categorie", categorie)
        formData.append("prix", prix)
        formData.append("ingredients", ingredients)
        formData.append("disponibilite", disponibilite)
        formData.append("tempsPreparation", tempsPreparation)

        dispatch(addProduitss(formData));
    };

    const [file, setFile] = useState("");
    const onChangeFile = e => {
        setFile(e.target.files[0]);
    }

    return (
        <div className="layout-inner">
            <div className="layout-content">
                <div className="container-fluid flex-grow-1 container-p-y">
                    <h4 className="font-weight-bold py-3 mb-0">Ajout des produits</h4>
                    <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/"><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item">Menu</li>
                            <li className="breadcrumb-item active">Gestion des produits</li>
                        </ol>
                    </div>
                    <div className="card mb-4" style={{ inlineSize: '90%' }}>
                        <h6 className="card-header">Default</h6>
                        <div className="card-body">
                            <form onSubmit={(e) => handleAddPlat(e)} encType="multipart/form-data">
                                <div className="form-group">
                                    <label className="form-label">Nom de produit</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        value={nomPlat}
                                        name="nomIngredient"
                                        onChange={(e) => setNomPlat(e.target.value)}
                                        id="NomPlat"
                                        placeholder="Entrer le Nom Plat ..."
                                        required
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Description</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        value={description}
                                        name="nomdescription"
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="NomDescription"
                                        placeholder="Entrer la description ..."
                                        required
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Catégorie</label>
                                    <select
                                        className="custom-select"
                                        value={categorie}
                                        onChange={(e) => setCategorie(e.target.value)}
                                    >
                                        <option>Entrée</option>
                                        <option>Plat principal</option>
                                        <option>Dessert</option>
                                        <option>Boisson</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Prix</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        value={prix}
                                        name="prix"
                                        onChange={(e) => setPrix(e.target.value)}
                                        placeholder="Entrer le prix en $"
                                        required
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label w-100">Image</label>
                                    <input type="file" onChange={e => onChangeFile(e)} name="file" />
                                    <small className="form-text text-muted">Example block-level help text here.</small>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Ingrédients</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        value={ingredients}
                                        name="ingredients"
                                        onChange={(e) => setIngredients(e.target.value)}
                                       id="ingredients"
                                        placeholder="Entrer les ingrédients ..."
                                        required
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Disponibilité</label>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="disponibilite"
                                                value="disponible"
                                                checked={disponibilite === 'disponible'}
                                                onChange={() => setDisponibilite('disponible')}
                                            />
                                            Disponible
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="disponibilite"
                                                value="non disponible"
                                                checked={disponibilite === 'non disponible'}
                                                onChange={() => setDisponibilite('non disponible')}
                                            />
                                            Non Disponible
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Temps de préparation</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        value={tempsPreparation}
                                        name="tempsPreparation"
                                        onChange={(e) => setTempsPreparation(e.target.value)}
                                        id="tempsPreparation"
                                        placeholder="Entrer le temps de préparation ..."
                                        required
                                    />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produit;