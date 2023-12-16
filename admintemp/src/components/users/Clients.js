import React from 'react'
import Sidebar from '../layout/Sidebar'

function Clients() {
    return (

        <div class="layout-inner">

            <Sidebar />

            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Gestion des Clients</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Users</li>
                            <li class="breadcrumb-item active">Gestion des Clients</li>
                        </ol>
                    </div>
                    <div class="card">

                        <div class="card-header">Les Clients</div>
                        <div class="col-md">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search for..."/>
                                                <span class="input-group-append">
                                                    <button class="btn btn-secondary" type="button">Search!</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                        <table class="table card-table">
                            <thead class="thead-light">
                                <tr>
                                    <th>Nom complet</th>
                                    <th>Numéro de téléphone</th>
                                    <th>Date de réservation</th>
                                    <th>Heure de réservation</th>
                                    <th>Nombre de personnes</th>
                                    <th>Numéro de table</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Clients
