import React from 'react';
import ReactDOM from 'react-dom/client';
import ProtectedRouter from './ProtectedRouter';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './screens/Register/Register';
import UserHome from './screens/User/UserHome';
import AdminHome from './screens/Admin/AdminHome';
import AddAddress from './screens/User/AddAddress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>

  <BrowserRouter>

  <Routes>

  <Route element={<ProtectedRouter/>}>

    {/* <Route path="Register" element={ <Register/> } /> */}
    <Route path="UserHome" element={ <UserHome/> } />
    <Route path="AdminHome" element={ <AdminHome/> } />
    <Route path="AddAddress" element={ <AddAddress/> } />
   
  </Route>


  <Route index element={<App />} />
  {/* <Route path="login" element={<Login isclicked="true" closeShow={styles.closeShow} container={styles.containerBg} />} /> */}

  </Routes>

  </BrowserRouter>

  </>


);


reportWebVitals();
