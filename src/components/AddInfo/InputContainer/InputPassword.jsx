import React from 'react'
import styles from './InputContainer.module.css'

const InputPassword = (props) => {
  return (
    <div className={styles.container}>

        <div className={styles.InfoLeft}>{props.info}</div>
        {/* <input placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/> */}
        <input type="password" required="required" placeholder={props.placeholder} className={styles.InfoRight} onChange={props.onChange}/>
      
    </div>
  )
}

export default InputPassword
