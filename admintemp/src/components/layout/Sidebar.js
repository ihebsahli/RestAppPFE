import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';


function Sidebar() {
    const dispatch = useDispatch();

    const loggout = (e) => {
        e.preventDefault();
        dispatch(logout());
      };
    
  return (
    <div id="layout-sidenav" className="layout-sidenav sidenav sidenav-vertical bg-white logo-dark">
    <div className="app-brand demo">
        <span className="app-brand-logo demo">
            <img src="assets/img/logo.png" alt="Brand Logo" className="img-fluid"/>
        </span>
        <a href="index.html" className="app-brand-text demo sidenav-text font-weight-normal ml-2">PizzUp</a>
        <a href="javascript:" className="layout-sidenav-toggle sidenav-link text-large ml-auto">
            <i className="ion ion-md-menu align-middle"></i>
        </a>
    </div>
    <div className="sidenav-divider mt-0"></div>

    <ul className="sidenav-inner py-1">

        <li className="sidenav-item active">
            <a href="/dashboard" className="sidenav-link">
                <i className="sidenav-icon feather icon-home"></i>
                <div>Dashboards</div>
                <div className="pl-1 ml-auto">
                    <div className="badge badge-danger">Hot</div>
                </div>
            </a>
        </li>

        <li className="sidenav-divider mb-1"></li>
        <li className="sidenav-header small font-weight-semibold">UI Components</li>
        <li className="sidenav-item">
            <a href="/allreservations" className="sidenav-link">
                <i className="lnr lnr-phone-handset"></i>
                <div>__Reservations</div>
            </a>
        </li>

        <li className="sidenav-item">
            <a href="/menu" className="sidenav-link ">
                <i className="sidenav-icon feather icon-box"></i>
                <div>Menu</div>
            </a>
        
        </li>

        <li className="sidenav-divider mb-1"></li>
        <li className="sidenav-header small font-weight-semibold">Forms & Tables</li>
        <li className="sidenav-item">
            <a href="/ingredients" className="sidenav-link ">
                <i className="sidenav-icon feather icon-clipboard"></i>
                <div>Ingrédients</div>
            </a>
          
        </li>
        <li className="sidenav-item">
            <a href="/tables" className="sidenav-link">
                <i className="sidenav-icon feather icon-grid"></i>
                <div>Tables</div>
            </a>
        </li>

        <li className="sidenav-divider mb-1"></li>
        <li className="sidenav-header small font-weight-semibold">Users</li>
        <li className="sidenav-item">
            <a href="/employes" className="sidenav-link ">
                <i className="feather icon-users"></i>
                <div>Employés</div>
            </a>
            <a href="/clients" className="sidenav-link ">
                <i className="feather icon-users"></i>
                <div>Clients</div>
            </a>
           
        </li>

        <li className="sidenav-divider mb-1"></li>
        <li className="sidenav-header small font-weight-semibold">Pages</li>
        <li className="sidenav-item">
            <a href="pages_authentication_login-v1.html" className="sidenav-link">
                <i className="sidenav-icon feather icon-lock"></i>
                <div>Login</div>
            </a>
        </li>
        <li className="sidenav-item"  onClick={(e) => loggout(e)} >
            <a href="" className="sidenav-link">
                <i className="sidenav-icon feather icon-user"></i>
                <div>Logout</div>
            </a>
        </li>
        <li className="sidenav-item">
            <a href="pages_faq.html" className="sidenav-link">
                <i className="sidenav-icon feather icon-anchor"></i>
                <div>FAQ</div>
            </a>
        </li>
    </ul>
</div>
  )
}

export default Sidebar
