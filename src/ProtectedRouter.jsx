import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRouter = () => {
    const token = localStorage.getItem("Token");
    const auth ={"token":false};

    const admin = localStorage.getItem("admin");
    const adminpanel ={"admin":false};

    var returnpage;

    if(token !== undefined && token != null){
        auth.token=true;
    }
    else{
        auth.token=false;
    }


    if(admin !== undefined && admin != null){
      adminpanel.admin=true;
    }
    else{
      adminpanel.admin=false;
   }



  // if(auth.token == true && adminpanel.admin == true){
  //   returnpage = <Navigate to ="/AdminHome"/>  
  //   //returnpage = <Outlet/> 
  // }

  // else if(auth.token == true && adminpanel.admin == false){
  //   returnpage = <Navigate to ="/UserHome"/> 
  // }

  // else if(auth.token == false && adminpanel.admin == false){
  //   returnpage = <Navigate to ="/"/> 
  // }



  return (

    //returnpage
    auth.token ? <Outlet/> : <Navigate to ="/"/>  
    
     
    //adminpanel.admin ? <Outlet/> : <Navigate to ="/UserHome"/>   
        
  )
}

export default ProtectedRouter

