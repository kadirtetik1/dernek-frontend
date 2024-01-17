import React, { useState } from 'react'
import { createAPIEndpoint, EndPoints } from '../../api';
import styles from './AddInfo.module.css'
import InputContainer from './InputContainer/InputContainer';
import {useNavigate } from 'react-router-dom'

const AddInfo = (props) => {

  const[name, setName]= useState("");
  const[lastname, setLastName]= useState("");
  const[fathername, setFatherName]= useState("");
  const[address, setAddress]= useState("");
  const[phone, setPhone]= useState("");
  const[workinfo, setWorkInfo]= useState("");
  const[unvan, setUnvan]= useState("");
  const[family, setFamily]= useState("");

  const navigate = useNavigate();

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
  }

  const handleFatherNameChange = (value) => {
    setFatherName(value);
  }

  const handleAddressChange = (value) => {
    setAddress(value);
  }

  const handlePhoneChange = (value) => {
    setPhone(value);
  }

  const handleWorkInfoChange = (value) => {
    setWorkInfo(value);
  }

  const handleUnvanChange = (value) => {
    setUnvan(value);
  }

  const handleFamilyChange = (value) => {
    setFamily(value);
  }

  const handleSubmitAddress = (event) =>{

    const data ={
      Name : name,   //Soldaki backendden gelen, sağdaki reacttan gelen adlandırmalar.
      Lastname: lastname,
      FatherName: fathername,
      address: address,
      Phone: phone,
      WorkInfo: workinfo,
      Unvan: unvan,
      Family: family
    };

    console.log(data);

    if(data.Name!="" && data.Lastname!="" && data.FatherName!="" && data.address!="" && data.Phone!="" && data.WorkInfo!="" && data.Unvan!="" && data.Family!=""){

      createAPIEndpoint(EndPoints.address).post(data).then(res => {

        //   const showToastMessage = () => {
        //     toast.info("Registration is Sucessfull!", {
        //         position: toast.POSITION.TOP_RİGHT
        //     });
        // };
        // showToastMessage();
    
        // alert("Kayıt Başarılı!")
    
        console.log(res.data);
        
        console.log(res)}
        ).catch(err => console.log(err));
    }


  }

  return (
    <div className={styles.background1}>

      <form className={styles.background}>

     

        <div className={styles.background}>

      <InputContainer info="Ad:" placeholder="Adınızı Giriniz.." onChange={ (e) => {handleNameChange(e.target.value) }}/>
      <InputContainer info="Soyad:" placeholder="Soyadınızı Giriniz.." onChange={ (e) => {handleLastNameChange(e.target.value) }}/>
      <InputContainer info="Baba Adı:" placeholder="Babanızın Adını Giriniz.." onChange={ (e) => {handleFatherNameChange(e.target.value) }}/>
      <InputContainer info="Adres:" placeholder="Adresinizi Giriniz.." onChange={ (e) => {handleAddressChange(e.target.value) }}/>
      <InputContainer info="Telefon:" placeholder="Telefon Numaranızı Giriniz.." onChange={ (e) => {handlePhoneChange(e.target.value) }}/>
      <InputContainer info="İş:" placeholder="Kurum Bilginizi Giriniz.." onChange={ (e) => {handleWorkInfoChange(e.target.value) }}/>
      <InputContainer info="Unvan:" placeholder="Prof, Doktor.." onChange={ (e) => {handleUnvanChange(e.target.value) }}/>
      <InputContainer info="Kabine:" placeholder="HacıYusuflar.." onChange={ (e) => {handleFamilyChange(e.target.value) }}/>

        </div>

        <div className={styles.submitContainer}
        onClick={(event) => {
        handleSubmitAddress(event)
        }} 
        
        ><input className={styles.submitButton} type="submit" value="Gönder"/></div>

       </form>

    </div>
  )
}

export default AddInfo
