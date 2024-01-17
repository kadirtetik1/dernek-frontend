import React from 'react'
import InputContainer from '../../../components/AddInfo/InputContainer/InputContainer';
import styles from './RegisterForm.module.css'

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>

        <form className={styles.formElements}>
            <InputContainer info="Ad:" placeholder="Adınızı Giriniz.."/>
            <InputContainer info="Soyad:" placeholder="Adınızı Giriniz.."/>
            <InputContainer info="E-mail:" placeholder="Adınızı Giriniz.."/>
            <InputContainer info="Kullanıcı Adı:" placeholder="Adınızı Giriniz.."/>
            <InputContainer info="Şifre:" placeholder="Adınızı Giriniz.."/>
           
        </form>

      </div>
    </div>
  )
}

export default RegisterForm
