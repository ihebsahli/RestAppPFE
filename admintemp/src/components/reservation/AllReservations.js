import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/Sidebar'
import ReservationForm from './Reservastion';
import { getReservationss, deleteReservations, editReservations } from '../../redux/actions/reservation'
import { useDispatch, useSelector } from 'react-redux';

function AllReservations() {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState({ id: '', nomComplet: '', numeroTelephone: '', dateReservation: '', heureReservationheureReservation: '', nombrePersonnes: '', numeroTable: '' });
    const handleEditClick = (reservation) => {
        const { id, nomComplet, numeroTelephone, dateReservation, heureReservationheureReservation, nombrePersonnes, numeroTable } = reservation
        setSelectedReservation({ id, nomComplet, numeroTelephone, dateReservation, heureReservationheureReservation, nombrePersonnes, numeroTable });

        setShowModal(true);
    };
    const handleUpReservation = () => {
        dispatch(editReservations(selectedReservation));

    };
    const handleModalClose = () => {
        setSelectedReservation(null);
        setShowModal(false);
    };
    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setSelectedReservation({ ...selectedReservation, [name]: value })
    }

    const [Search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteReservations(id))
    };

    const reservation = useSelector((state) => state.reservations);
    const { reservations, loading } = reservation;

    useEffect(() => {
        dispatch(getReservationss())
    }, [dispatch])
    return loading || reservations === [] ? <h1>LOADING...</h1> : (

        <div class="layout-inner">

            <Sidebar />
            <ReservationForm />

            <div class="layout-content">

                <div class="container-fluid flex-grow-1 container-p-y">

                    <h4 class="font-weight-bold py-3 mb-0">Liste des réservations</h4>
                    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item">Réservations</li>
                            <li class="breadcrumb-item active">Liste </li>
                        </ol>
                    </div>
                    <div class="card">

                        <div class="card-header">Les Réservations</div>
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

                                {reservations.filter(el => el.nomComplet.toLowerCase().includes(Search.toLowerCase())).map((x, i) =>
                                    <tr>
                                        <th scope="row">{x.nomComplet}</th>
                                        <td>{x.numeroTelephone}</td>
                                        <td>{x.dateReservation}</td>
                                        <td>{x.heureReservation}</td>
                                        <td>{x.nombrePersonnes}</td>
                                        <td>{x.numeroTable}</td>
                                        <td><button className='btn btn-danger feather icon-x-square' onClick={e => handleDelete(e, x._id)} ></button>
                                            <button className='btn btn-success feather icon-upload-cloud' onClick={() => handleEditClick(reservation)}></button>
                                        </td>
                                    </tr>)}


                            </tbody>
                        </table>
                    </div>

                </div>

                {showModal && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header bg-secondary text-white">
                                    <h5 className="modal-title">Modifier la réservation</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {selectedReservation && (
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="nomComplet">nomComplet</label>
                                                <input type="text" className="form-control" id="nomComplet" defaultValue={selectedReservation.nomComplet} name="nomComplet" onChange={onChangeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nomClient">numeroTelephone</label>
                                                <input type="number" className="form-control" id="numeroTelephone" defaultValue={selectedReservation.numeroTelephone} name="numeroTelephone" onChange={onChangeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dateReservation">dateReservation</label>
                                                <input type="datetime-local" className="form-control" id="dateReservation" defaultValue={selectedReservation.dateReservation} name="dateReservation" onChange={onChangeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="heureReservation">heureReservation</label>
                                                <input type="datetime-local" className="form-control" id="heureReservation" defaultValue={selectedReservation.heureReservation} name="heureReservation" onChange={onChangeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nombrePersonnes">nombrePersonnes</label>
                                                <input type="number" className="form-control" id="nombrePersonnes" defaultValue={selectedReservation.nombrePersonnes} name="nombrePersonnes" onChange={onChangeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="numeroTable">numeroTable</label>
                                                <input type="number" className="form-control" id="numeroTable" defaultValue={selectedReservation.numeroTable} name="numeroTable" onChange={onChangeHandler} />
                                            </div>
                                        </form>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Fermer</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { handleUpReservation(); handleModalClose(); }}>Enregistrer</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default AllReservations
