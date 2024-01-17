import React from 'react'
import styles from './InputContainer.module.css'

const InputContainer = (props) => {
  return (
   

    
    <div className={styles.container}>

        <div className={styles.InfoLeft}>{props.info}</div>
        {/* <input placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/> */}
        <input type="text" required="required" placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/>
      
    </div>

 
  )
}

export default InputContainer
