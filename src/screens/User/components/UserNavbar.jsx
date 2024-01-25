import React from 'react'
import styles from './UserNavbar.module.css'
import {useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const UserNavbar = () => {
    const navigate = useNavigate();

    let username= localStorage.getItem("fullname");
    let admin ="";
    let isAdmin= localStorage.getItem("admin");
    

    if(isAdmin=="True"){
        admin="Admin"
    }
    else{
      admin="";
    }

  return (
    <div className={styles.background}>

    <div 
    // onClick={ () => {  //çıkış yapta girişe aktaracak bir buton koy.
    //   navigate("/")
    // }} 
    className={styles.logo}>
      <img src={require('../../../assets/Dernek-Logo.png')} style={{maxWidth:80, maxHeight:80 }}/>
    </div>
    <div className={styles.title}>Kargın Yenice Köyü Kalkınma Ve Dayanışma Derneği</div>
    <div className={styles.user}>

    <div className={styles.admin}>{admin}</div>

    <div>{username}</div>
      <div className={styles.userlogo}><FaUser color='#1f4591' size={20}

     onClick={ () => {  //çıkış yapta girişe aktaracak bir buton koy.
     navigate("/")
     }} 
      
      /></div>
      
      
    </div>

  </div>
  )
}

export default UserNavbar
