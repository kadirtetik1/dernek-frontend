import React from 'react'
import styles from './InputContainer.module.css'

const InputMail = (props) => {
  return (
    <div className={styles.container}>

        <div className={styles.InfoLeft}>{props.info}</div>
        {/* <input placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/> */}
        <input type="email" required="required" placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/>
      
    </div>
  )
}

export default InputMail
