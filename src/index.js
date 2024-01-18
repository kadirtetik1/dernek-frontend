import React from 'react';
import ReactDOM from 'react-dom/client';
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
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>

  <Routes>

  <Route>
    <Route path="Register" element={ <Register/> } />
    <Route path="UserHome" element={ <UserHome/> } />
    <Route path="AdminHome" element={ <AdminHome/> } />
    <Route path="AddAddress" element={ <AddAddress/> } />
   
  </Route>


  <Route index element={<App />} />
  {/* <Route path="login" element={<Login isclicked="true" closeShow={styles.closeShow} container={styles.containerBg} />} /> */}

  </Routes>

  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
