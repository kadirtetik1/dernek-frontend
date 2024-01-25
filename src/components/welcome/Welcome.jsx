import React from 'react'
import AddInfo from '../AddInfo/AddInfo';
import styles from './welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.background}>
      
      <div className={styles.container1}>
        <h1>Hoşgeldiniz!</h1>
        <h2>Tanıtım vs.</h2>
        
        
      </div>

      <div className={styles.container2}>
      <h2>Bu Alandan Hızlıca Yeni Adres Ekleyebilirsiniz </h2>
        <AddInfo/>
      </div>
      
    </div>
  )
}

export default Welcome


