import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";
import speaker from "../types/Speaker"
import Speaker from "../speakers/Speaker"
import { Box } from "@mui/material";

const Sessions = ({ speakers }:InferGetStaticPropsType<typeof getStaticProps>) => { 

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'username',
          headerName: 'UserName',
          width: 150,
          editable: true,
        },
        {
          field: 'website',
          headerName: 'Website',
          type: 'string',
          width: 110,
          editable: true,
        }
      ];
    const [speakersList, setSpeakersList]  = useState(() => [...speakers]);
    const newSpeaker = {
        id: 11,
        name: "Test Test",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      };

    const handleClick = () => setSpeakersList(prevArray =>  [newSpeaker, ...prevArray ])
    
    const [pageSize, setPageSize] = useState([5])
     
                      
     return(  
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={speakersList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>                   
      )    
};



export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const speakers: speaker[] = await response.json()

    return {
           props: { 
            speakers   
           }    
    }
}

 
export default Sessions;