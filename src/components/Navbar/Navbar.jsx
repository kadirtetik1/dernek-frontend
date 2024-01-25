import React, { Component, useState } from 'react'
import styles from './Navbar.module.css'
import { FaUser } from "react-icons/fa";
import Login from './Login';
import {useNavigate } from 'react-router-dom'
import Register from '../../screens/Register/Register';
import RegisterForm from '../../screens/Register/components/RegisterForm';

const Navbar = (props) => {

  const navigate = useNavigate();
  const [register, setRegister] = useState(false); 

  function toggleRegister (){
    setRegister(!register);

    console.log(register);
 }

    return  (
      <div className={styles.background}>

        <div 
        onClick={ () => {
          navigate("/")
        }} 
        className={styles.logo}>
          <img src={require('../../assets/Dernek-Logo.png')} style={{maxWidth:80, maxHeight:80 }}/>
        </div>
        <div className={styles.title}>Kargın Yenice Köyü Kalkınma Ve Dayanışma Derneği</div>
        <div className={styles.user}>

          <div className={styles.userlogo}><FaUser color='#1f4591' size={20}/></div>
          <div 
          onClick={ () => {
           // navigate("/Register")

           toggleRegister();
          }} 
          className={styles.register}>Kayıt Ol</div>
          
          <Login/>
          
        </div>

        {/* <Register isclicked={register} closeRegister={setRegister} /> */}
        <RegisterForm isclicked={register} closeRegister={setRegister} />

      </div>
    )
    
  }


export default Navbar
