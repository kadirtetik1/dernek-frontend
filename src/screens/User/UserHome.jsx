import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import TableUser from './components/TableUser';
import styles from './UserHome.module.css'
import {useNavigate } from 'react-router-dom'
import AddAddress from './AddAddress';

const UserHome = () => {

  const navigate = useNavigate();

  const [addAddress, setAddAddress] = useState(false);

    function toggleAddAddress (){
      setAddAddress(!addAddress);
       
     }

  return (
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
      <TableUser/>
    </div>
  )
}

export default UserHome
