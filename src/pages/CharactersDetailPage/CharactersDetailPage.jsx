import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryDetail from "../../components/GalleryDetail/GalleryDetail";

export default function CharactersDetailPage() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    const getCharacter = async () => {
      const res = await axios.get(
        "https://api.disneyapi.dev/characters/" + id
      );
      console.log(res);
      setCharacter(res.data)

    };
  
    useEffect( () => {getCharacter()}, []);

    return (
    <div>
       <GalleryDetail data={character}></GalleryDetail>
    </div>
);
}
