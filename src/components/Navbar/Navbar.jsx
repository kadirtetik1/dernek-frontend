import React, { Component } from 'react'
import styles from './Navbar.module.css'
import { FaUser } from "react-icons/fa";
import Login from './Login';
import {useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

    return (
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
            navigate("/Register")
          }} 
          className={styles.register}>Kayıt Ol</div>
          
          <Login/>
          
        </div>

      </div>
    )
  }


export default Navbar
