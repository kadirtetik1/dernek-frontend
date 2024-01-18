import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import AddAddress from '../User/AddAddress';
import TableAdmin from './components/TableAdmin';
import styles from './AdminHome.module.css'

const AdminHome = () => {

  const [addAddress, setAddAddress] = useState(false);

    function toggleAddAddress (){
      setAddAddress(!addAddress);

    }
  return (
    <div>
      <div>
        <Navbar/>
        <div className={styles.titleContainer}> 
        <h2 className={styles.title}>Adres Defteri</h2>

       
        <div className={styles.addButtonContainer}>
          <div className={styles.addButton} onClick = {(event) => {

            toggleAddAddress();

            
          }}>
            <span className={styles.addTitle}>Yeni Kayıt Ekle</span>
          </div>
          <AddAddress isclicked={addAddress} closeInfo={setAddAddress}/>
        </div>
        </div>
      <TableAdmin/>
    </div>
      
    </div>
  )
}

export default AdminHome
