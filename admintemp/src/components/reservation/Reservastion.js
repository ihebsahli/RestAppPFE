import React from 'react';

function Reservation() {
  return (
    <div className="layout-inner">
      <div className="layout-content">
        <div className="container-fluid flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-0">Ajout des réservations</h4>
          <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
              <li className="breadcrumb-item">Menu</li>
              <li className="breadcrumb-item active">Ajout</li>
            </ol>
          </div>

          <div className="card mb-4">
            <h6 className="card-header">Default</h6>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="form-label">Nom complet</label>
                  <input type="text" className="form-control" placeholder="Entrer le nom complet..." />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Numéro de téléphone</label>
                  <input type="text" className="form-control" placeholder="Entrer le numéro de téléphone..." />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Date de réservation</label>
                  <input type="date" className="form-control" />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Heure de réservation</label>
                  <input type="time" className="form-control" />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Nombre de personnes</label>
                  <input type="number" className="form-control" placeholder="Entrer le nombre de personnes..." />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <label className="form-label">Numéro de table</label>
                  <input type="number" className="form-control" placeholder="Entrer le numéro de table..." />
                  <div className="clearfix"></div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;