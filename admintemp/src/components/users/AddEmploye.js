import React from 'react'

function AddEmploye() {
return (
<div class="layout-inner">
<div class="layout-content">
<div class="container-fluid flex-grow-1 container-p-y">
                <h4 class="font-weight-bold py-3 mb-0">Gestion des Employés</h4>
                <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a></li>
                        <li class="breadcrumb-item">Tables</li>
                        <li class="breadcrumb-item active">Gestion des Employés</li>
                    </ol>
                </div>

                <div class="card mb-4">
                    <h6 class="card-header">Default</h6>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label class="form-label">Prénom</label>
                                <input type="text" class="form-control" placeholder="entrer le prénom ..." required />
                                <div class="clearfix"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Nom de famille</label>
                                <input type="text" class="form-control" placeholder="entrer le nomde famille ..." required />
                                <div class="clearfix"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="entrer l'email ..." required />
                                <div class="clearfix"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" placeholder="entrer le mot de passe ..." required />
                                <div class="clearfix"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Numéro de téléphone</label>
                                <input type="tel" class="form-control" placeholder="entrer le numéro de téléphone ..." required />
                                <div class="clearfix"></div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Rôle</label>
                                <select class="custom-select" required>
                                    <option value="client">Livreur</option>
                                    <option value="admin">Serveur</option>
                                </select>
                            </div>

                            <button type="submit" class="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    </div>)
    }
    export default AddEmploye