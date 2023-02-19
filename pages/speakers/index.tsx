import Button from "@mui/material/Button";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";
import speaker from "../types/Speaker"
import Speaker from "./Speaker"

const Speakers = ({ speakers }:InferGetStaticPropsType<typeof getStaticProps>) => { 

    const speakerElements =  speakers.map((s: speaker) =>  
                                        <Speaker key={s.id} name={s.name} />
                                );
    const [speakerList, setSpeakerList]  = useState(() => [...speakerElements]);
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

    const handleClick = () => setSpeakerList(prevArray =>  [<Speaker key={newSpeaker.id} name={newSpeaker.name} />, ...prevArray ])
    
    
     
                      
     return(  
        <>
          <Button variant="contained" onClick={ handleClick }>Add Speaker</Button>
          <h3>Speakers</h3>                        
          {
            speakerList
          } 
        </>                    
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
 
export default Speakers;