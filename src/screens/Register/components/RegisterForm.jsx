import React, { useState } from 'react'
import InputContainer from '../../../components/AddInfo/InputContainer/InputContainer';
import InputMail from '../../../components/AddInfo/InputContainer/InputMail';
import InputPassword from '../../../components/AddInfo/InputContainer/InputPassword';
import styles from './RegisterForm.module.css'
import {useNavigate } from 'react-router-dom'
import { createAPIEndpoint, EndPoints } from '../../../api';

const RegisterForm = (props) => {

  const[name, setName]= useState("");
  const[lastname, setLastName]= useState("");
  const[mail, setMail]= useState("");
  const[username, setUsername]= useState("");
  const[password, setPassword]= useState("");
  

  const navigate = useNavigate();

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
  }

  const handleMailChange = (value) => {
    setMail(value);
  }

  const handleUsernameChange = (value) => {
    setUsername(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }


  const handleRegister = (event) =>{

    const data ={
      Name : name,   //Soldaki backendden gelen, sağdaki reacttan gelen adlandırmalar.
      Lastname: lastname,
      Email: mail,
      Username: username,
      Password: password,
    };

    console.log(data);

    if(data.Name!="" && data.Lastname!="" && data.Email!="" && data.Username!="" && data.Password!=""){

      createAPIEndpoint(EndPoints.user).post(data).then(res => {

        //   const showToastMessage = () => {
        //     toast.info("Registration is Sucessfull!", {
        //         position: toast.POSITION.TOP_RİGHT
        //     });
        // };
        // showToastMessage();
    
        alert("Kayıt Başarılı!")
    
        console.log(res.data);
        
        console.log(res)}
        ).catch(err => console.log(err));
    }
    


  }




  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>

      <h2>Kayıt Olmak İçin Lütfen Bilgilerinizi Giriniz</h2>

        <div className={styles.formContainer2}>

   

        <form className={styles.formElements}>
            <InputContainer info="Ad:" placeholder="Adınızı Giriniz.." onChange={ (e) => {handleNameChange(e.target.value) }}/>
            <InputContainer info="Soyad:" placeholder="Soyadınızı Giriniz.." onChange={ (e) => {handleLastNameChange(e.target.value) }}/>
            <InputMail info="E-mail:" placeholder="Email Adresinizi Giriniz.." onChange={ (e) => {handleMailChange(e.target.value) }}/>
            <InputContainer info="Kullanıcı Adı:" placeholder="Kullanıcı Adınızı Belirleyiniz.." onChange={ (e) => {handleUsernameChange(e.target.value) }}/>
            <InputPassword info="Şifre:" placeholder="Şifrenizi Belirleyiniz.." onChange={ (e) => {handlePasswordChange(e.target.value) }}/>

            <div className={styles.submitContainer}
        onClick={(event) => {
        handleRegister(event)
        }} 
        
        ><input className={styles.submitButton} type="submit" value="Gönder"/></div>
           
        </form>

        </div>

      </div>
    </div>
  )
}

export default RegisterForm
