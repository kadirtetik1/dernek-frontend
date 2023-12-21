import React from 'react'
import styles from './InputContainer.module.css'

const InputContainer = (props) => {
  return (
   

    
    <div className={styles.container}>

        <div className={styles.InfoLeft}>{props.info}</div>
        <input placeholder={props.placeholder} className={styles.InfoRight}/>
      
    </div>

 
  )
}

export default InputContainer
