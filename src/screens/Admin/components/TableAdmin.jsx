import { useMemo, React, useEffect, useState } from 'react';

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { createAPIEndpoint, EndPoints } from '../../../api';

import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import AddAddress from '../../User/AddAddress';

import styles from './TableAdmin.module.css'


var data = [];
var data1=[];

let user="";


const TableAdmin = () => {

 const [data2, setData] = useState("");

 const [userData, setUserData] = useState("");
  
  useEffect(() => {

    createAPIEndpoint(EndPoints.address).get().then((res) =>{ 
      setData(res);
    
    }).catch(err => console.log(err));
  
  },[])


  if(data2.data!=undefined){

    for(let i =0; data2?.data.length>i;i++){
      data1[i] = data2.data[i];
      }
      
      data = data1;

  }


    const columns = useMemo(
        () => [
          {
            accessorKey: 'name',
            header: 'Ad',
            size: 150,
          },
          {
            accessorKey: 'lastname',
            header: 'Soyad',
            size: 150,
          },
          {
            accessorKey: 'address',
            header: 'Adres',
            size: 200,
          },
          {
            accessorKey: 'fatherName',
            header: 'Baba Adı',
            size: 150,
          },
          {
            accessorKey: 'family',
            header: 'Kabine Adı',
            size: 150,
          },
          {
            accessorKey: 'phone',
            header: 'Telefon Numarası',
            size: 150,
          },
          {
            accessorKey: 'workInfo',
            header: 'Kurum Bilgisi',
            size: 150,
          },
          {
            accessorKey: 'unvan',
            header: 'Ünvanı',
            size: 150,
          },
          {
            accessorKey: 'createdTime',
            header: 'Eklendiği Tarih',
            size: 150,
          },
        ],
        [],
      );

      const deleteAddress = (id) => {
        confirmAlert({
          title: 'Adresi Kaydını Silmek Üzeresiniz.',
          message: 'Onaylıyor musunuz?',
          buttons: [
            {
              label: 'Evet',
              onClick: () => deleteFunction(id)
            },
            {
              label: 'Hayır',
            //   onClick: () => alert('İşlem İptal Edildi')
            }
          ]
        });
      };

     function deleteFunction(id){

       createAPIEndpoint(EndPoints.address).delete(id).then(res => {

                //   alert("Adres Kaydı Silindi!");
                  window.location.reload(false);
           
                  console.log(res.data);
               
                  console.log(res)}
                  ).catch(err => console.log(err));

     }

     const [addAddress, setAddAddress] = useState(false);

    function toggleAddAddress (){
      setAddAddress(!addAddress);

    }

    const[userID, setUserID] = useState(null);

    let userid;
    let username;
    let name;
    let lastname;
    let admin;
    let password;
    let email;
    let createdtime;
    
    function setUserInfo(userid1, username1, name1, lastname1, admin1, password1, email1, createdtime1){
      userid= userid1;
      username=username1;
      name=name1;
      lastname=lastname1;
      admin=admin1;
      password=password1;
      email=email1;
      createdtime=createdtime1;
     
    }

    let userID2 ="Kayıtsız Giriş.";

    // var userID= "Üyeliksiz Kayıt";


        const table = useMaterialReactTable({
          columns,
          data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
          
          enableRowActions: true,
          renderRowActions: ({ row }) => (
            <Box>
             <IconButton color="info" onClick={() => {
              
              // console.log(data[row.index].userID); 
                 
                  if(data[row.index].userID !=null){

                    // setUserID(data[row.index].userID);

                    // console.log(data[row.index].userID);

                    // alert(typeof(userID));


                    

                    

                    createAPIEndpoint(EndPoints.user).getById(data[row.index].userID).then((res) =>{ 
                      setUserData(res.data);
                      //console.log(res);
                      // console.log(res.data.username);
                      // console.log(userData);

                      setUserInfo(res.data.id, res.data.username, res.data.name, res.data.lastname, res.data.admin, res.data.password, res.data.email, res.data.createdTime);
                      
                      console.log(userid);
                      console.log(username);
                      console.log(name);
                      console.log(lastname);

                      alert("username: "+username);
                    
                    }).catch(err => console.log(err));
                  
                    
                }

            
            }}>
                <AccountCircleIcon />
                <div className={styles.userID}>
                  {/* {data[row.index].userID} */}

                  {/* {data[row.index].userID==null? userID2="Üyelikliksiz Kayıt": userID2=data[row.index].userID} */}
                  {data[row.index].userID==null? userID2="Üyelikliksiz Kayıt": userID2="Üye Bilgilerini Getir."}

                  {/* {userID2} */}
                </div>
              </IconButton>

              <div>

              {/* <IconButton color="success">  alert(data[row.index].id);  */}

              

              {/* <AddAddress name={data[row.index].name} 
              lastname={data[row.index].lastname}
              fathername={data[row.index].fatherName}
              address={data[row.index].address}
              phone={data[row.index].phone}
              workinfo={data[row.index].workInfo}
              family={data[row.index].family}
              unvan={data[row.index].unvan}
              
              isclicked={addAddress} closeInfo={setAddAddress}/> */}
              
                {/* <EditIcon onClick={() => toggleAddAddress()} />
              </IconButton> */}

              </div>

              <IconButton color="error" onClick={() => 
                
                deleteAddress(data[row.index].id)}>
                <DeleteIcon />
              </IconButton>

            </Box>
          ),
        
        });

        

        
      

      
  return <MaterialReactTable table={table} />;
};


export default TableAdmin
