import React, { useState } from 'react'
import InputContainer from '../../../components/AddInfo/InputContainer/InputContainer';
import InputMail from '../../../components/AddInfo/InputContainer/InputMail';
import InputPassword from '../../../components/AddInfo/InputContainer/InputPassword';
import styles from './RegisterForm.module.css'
import {useNavigate } from 'react-router-dom'
import { createAPIEndpoint, EndPoints } from '../../../api';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {InvalidTokenError, jwtDecode} from 'jwt-decode'
import {FiX} from "react-icons/fi";

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

    event.preventDefault();

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

        if(res.data=="Bu kullanıcı adı daha önceden alınmış. Başka bir kullanıcı adı seçiniz."){
          alert(res.data);
        }

        else if(res.data=="Bu mail adresiyle kayıtlı bir üyelik bulunmakta. Şifrenizi mi unuttunuz ?"){

          alert(res.data);

        }

        else if(res.data=="Kayıt Başarılı! Giriş yapabilirsiniz."){

          alert("Kayıt Başarılı! Anasayfaya Yönlendiriliyorsunuz.."); 

          

          createAPIEndpoint(EndPoints.user_login, ).post({Username : data.Username ,Password : data.Password}).then((res) =>{
            console.log(res);
           
    
            console.log(res.data);
            
              localStorage.setItem("Token", res.data.accessToken);
              const decode = jwtDecode(res.data.accessToken);
              localStorage.setItem("Id", decode.id); 
              localStorage.setItem("username", decode.username); 
              localStorage.setItem("admin", decode.admin); 
              localStorage.setItem("fullname", decode.fullname); 
            
              if(decode.admin){
                navigate("/AdminHome");
              }
    
              else{
                navigate("/UserHome");
              }
     
            
    
          }).catch(err => console.log(err));


        }
        
    
        console.log(res.data);
        
        console.log(res)}
        ).catch(err => console.log(err));

    }
    
  }


  return props.isclicked ? (
    <div className={styles.container}>
      <div className={styles.formContainer}>

        <div className={styles.ustBilgi}>

        <h2 className={styles.title}>Kayıt Olmak İçin Lütfen Bilgilerinizi Giriniz</h2>
      <div className={styles.closeButton} onClick={() => props.closeRegister(false)}><FiX size={'2rem'}/></div>

        </div>
     

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
      <ToastContainer />
    </div>
  )
  :""
}

export default RegisterForm
