import React, { useState } from 'react';
import { createAPIEndpoint, EndPoints } from '../../api';
import styles from './Login.module.css'
import {Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const[username, setUsername]= useState("");
  const[password, setPassword]= useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  }
  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const handleLogin = (value) => {

    value.preventDefault()
    
    const data ={
        Username:username,
        Password:password
    }

    if(data.Username!="" && data.Password!=""){

    

    createAPIEndpoint(EndPoints.user_login, ).post({Username : data.Username ,Password : data.Password}).then((res) =>{
        console.log(res);
        
        if(res.data == "Kullanıcı adı veya şifre hatalı!"){

        //   const showToastMessage = () => {
        //     toast.error(res.data, {
        //         position: toast.POSITION.TOP_RİGHT
        //     });
        // };
        // showToastMessage();

        alert("Kullanıcı adı veya şifre hatalı!")
          
        }
        else{

        //   console.log(res.data);
        //   navigate("/studentHome");
        //   localStorage.setItem("Token", res.data.accessToken);
        //   const decode = jwtDecode(res.data.accessToken);
        //   localStorage.setItem("Id", decode.id); 
        //   localStorage.setItem("username", decode.username); 
        //   localStorage.setItem("password", decode.password); 
        //   localStorage.setItem("fullname", decode.fullname); 
        //   localStorage.setItem("name", decode.name); 
        //   localStorage.setItem("lastname", decode.lastname); 
        //   localStorage.setItem("email", decode.email); 
        //   localStorage.setItem("academic_role", decode.academic_role); 

        // alert("Giriş Başarılı!")

         navigate("/UserHome");

        // <Link to="/UserHome"/>
 
        }

      }).catch(err => console.log(err));

    }


  }



  return (
    <div className={styles.dropdown}>

    <div className={styles.girisyap} onClick={()=>{toggleDropdown()}}>
      Giriş Yap
    </div>

    {isOpen && (
        <div className={styles.loginContainer}>
        <form className={styles.inputs}>

        <input type="text" required="required" className={styles.input} placeholder="Kullanıcı Adı" onChange={ (e) => {handleUsernameChange(e.target.value) }} />
        <input type="password" required="required" className={styles.input} placeholder="Şifre" onChange={ (e) => {handlePasswordChange(e.target.value) }} />

        <div 
        onClick={(event) => {
        handleLogin(event)
        }} 
        
      ><input className={styles.loginButton} type="submit" value="Giriş Yap"/></div>

        </form>
        
      </div>
    )}
      
    </div>
  )
}

export default Login
