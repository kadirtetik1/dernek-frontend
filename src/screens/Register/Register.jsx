import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from './components/RegisterForm';
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <RegisterForm/>
    </div>
  )
}

export default Register
