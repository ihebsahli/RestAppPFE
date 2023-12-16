import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllReservations from './components/reservation/AllReservations';
import ListProduit from './components/menu/ListProduit';
import Employes from './components/users/Employes';
import Clients from './components/users/Clients';
import ListIngredients from './components/ingredients/ListIngredients';
import setAuthToken from './redux/utils/setAuthToken';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './redux/actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';
import Alert from './components/layout/Alert';
import ListTables from './components/tables/ListTables';
import ListEmployes from './components/users/Employes';


// import DashboardAdmin from './Component/Admin/DashboardAdmin';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
    <div class="layout-wrapper layout-2">
          <Alert/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route  path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route exact path='/allreservations' element={<AllReservations />} />
          <Route exact path='/menu' element={<ListProduit />} />
          <Route exact path='/employes' element={<Employes />} />
          <Route exact path='/clients' element={<Clients />} />
          <Route exact path='/ingredients' element={<ListIngredients />} />
          <Route exact path='/tables' element={<ListTables />} />
          <Route exact path='/employes' element={<ListEmployes />} />

          
        </Routes>
    </div>
  );
}

export default App;
