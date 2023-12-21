import React, { Component } from 'react'
import Footbar from '../components/footbar/Footbar';
import Navbar from '../components/Navbar/Navbar';
import Welcome from '../components/welcome/Welcome';

import styles from './HomePage.module.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.background}>
        <Navbar/>
        <Welcome/>
        <Footbar/>
      </div>
    )
  }
}
