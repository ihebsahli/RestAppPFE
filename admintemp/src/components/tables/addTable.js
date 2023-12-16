import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTabless } from '../../redux/actions/tables';

function AddTable() {
  const [emplacement, setEmplacement] = useState('');
  const [capacite, setCapacite] = useState('');
  const [etatDisponibilite, setEtatDisponibilite] = useState('');
  const dispatch = useDispatch();

  const handleAddTable = () => {
    dispatch(addTabless( capacite,emplacement, etatDisponibilite));
  };


  return (
    <div className="layout-inner">
      <div className="layout-content">
        <div className="container-fluid flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-0">Gestion des tables</h4>
          <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="feather icon-home"></i>
                </a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Gestion des tables</li>
            </ol>
          </div>

          <div className="card mb-4">
            <h6 className="card-header">Default</h6>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="form-label">Emplacement</label>
                  <input
                    type="text"
                    value={emplacement}
                    name="Emplacement"
                    onChange={(e) => setEmplacement(e.target.value)}
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="entrer l'emplacement ..."
                    required
                  />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Capacité</label>
                  <select
                    className="custom-select"
                    value={capacite}
                    onChange={(e) => setCapacite(e.target.value)}
                    required
                  >
                    <option value="2">2 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="8">8 personnes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">État de disponibilité</label>
                  <select
                    className="custom-select"
                    value={etatDisponibilite}
                    onChange={(e) => setEtatDisponibilite(e.target.value)}
                    defaultValue="disponible"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="reservée">Réservée</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleAddTable}
                  className="btn btn-primary"
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTable;