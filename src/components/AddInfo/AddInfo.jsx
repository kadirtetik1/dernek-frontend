import React from 'react'
import styles from './AddInfo.module.css'
import InputContainer from './InputContainer/InputContainer';

const AddInfo = () => {
  return (
    <div className={styles.background1}>

        <div className={styles.background}>

      <InputContainer info="Ad:" placeholder="Adını Giriniz.."/>
      <InputContainer info="Soyad:" placeholder="Soyadınızı Giriniz.."/>
      <InputContainer info="Baba Adı:" placeholder="Baba Adını Giriniz.."/>
      <InputContainer info="Adres:" placeholder="Adresini Giriniz.."/>
      <InputContainer info="Telefon:" placeholder="Telefon Numaranızı Giriniz.."/>
      <InputContainer info="İş:" placeholder="Kurum Bilgisi Giriniz.."/>
      <InputContainer info="Unvan:" placeholder="Prof, Doktor.."/>
      <InputContainer info="Kabine:" placeholder="HacıYusuflar.."/>

        </div>

        <div className={styles.submitButton}>Gönder</div>

    </div>
  )
}

export default AddInfo
