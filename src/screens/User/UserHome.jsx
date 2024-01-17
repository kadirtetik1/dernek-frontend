import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import TableUser from './components/TableUser';

const UserHome = () => {
  return (
    <div>
        <Navbar/>
      <h1>User Home</h1>
      <TableUser/>
    </div>
  )
}

export default UserHome
