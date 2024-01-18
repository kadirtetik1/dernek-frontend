import React from 'react'
import AddInfo from '../../components/AddInfo/AddInfo';
import styles from './AddAddress.module.css'
import {FiX} from "react-icons/fi";

const AddAddress = (props) => {
  return props.isclicked ? (
    <div className={styles.AddContainer}>

        <div className={styles.InfoContainer1}>

            <div className={styles.InfoContainer}>
            <AddInfo/>
            </div>

            <div className={styles.closeButton} onClick={() => props.closeInfo(false)}>
            <FiX size={'2rem'}/>
            </div>
        
        </div>
        
      
    </div>
  )
  :""
}

export default AddAddress
