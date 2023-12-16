import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../layout/Sidebar'
import TableForm from './addTable';
import { getTabless, deleteTables } from '../../redux/actions/tables'

function AllTables() {

    const dispatch = useDispatch();

    const [Search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
      };

    const table = useSelector((state) => state.tables);

    const { tables, loading } = table;

    useEffect(() => { dispatch(getTabless()) }, [])

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteTables(id))
    };

    return loading || tables === [] ? <h1>LOADING...</h1> : (

        <div class="layout-inner">

            <Sidebar />
            <TableForm />


            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Gestion des tables</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Les tables</li>
                            <li class="breadcrumb-item active">Gestion des tables</li>
                        </ol>
                    </div>
                    <div class="card">

                        <div class="card-header">Les tables</div>
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
                                    <th>Emplacement</th>
                                    <th>Capacité</th>
                                    <th>État de disponibilité</th>

                                </tr>
                            </thead>
                            <tbody>
                            {tables.filter(el => el.emplacement.toLowerCase().includes(Search.toLowerCase())).map((x, i) =>

                                    <tr>
                                        <th scope="row">{x.emplacement}</th>
                                        <td>{x.capacite}</td>
                                        <td>{x.etatDisponibilite}</td>
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

export default AllTables
