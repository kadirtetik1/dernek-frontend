import { useMemo, React, useEffect, useState } from 'react';

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { createAPIEndpoint, EndPoints } from '../../../api';

import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


var data = [];
var data1=[];


const TableAdmin = () => {

 const [data2, setData] = useState("");
  
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


        const table = useMaterialReactTable({
          columns,
          data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
          
          enableRowActions: true,
          renderRowActions: ({ row }) => (
            <Box>
             <IconButton color="info" onClick={() => alert("Kullanıcı Bilgileri")}>
                <AccountCircleIcon />
              </IconButton>

              <IconButton color="success" onClick={() => console.info(data[row.index].id)}> 
                <EditIcon />
              </IconButton>

              <IconButton color="error" onClick={() => alert("silindi")}>
                <DeleteIcon />
              </IconButton>

            </Box>
          ),
        
        });

        

        
      

      
  return <MaterialReactTable table={table} />;
};


export default TableAdmin
