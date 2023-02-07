import "./Characters.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Paginator from "../../components/Paginator/Paginator";
//import Paginator from "../../components/Paginator/Paginator";

export default function Characters(){
    const [characters, setCharacters] = useState([]);


    const getCharacters = async (actualPage = 1) => {
      const res = await axios.get(
        "https://api.disneyapi.dev/characters?page=" + actualPage
      );
      console.log(res.data.data)
      setCharacters(res.data.data)

    };
  
    useEffect(() => {getCharacters(1)},[]);

    return(
        <>
    <div>
        <Paginator onChangePage={getCharacters}></Paginator>
        <Gallery list={characters}></Gallery>
        
    </div>
    </>
    );
    };