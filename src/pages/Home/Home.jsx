//import Characters from "../Characters/Characters";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home(){
    return(
        <div className="c-div-container">
        <h2 className="c-title">Pincha en Characters y descubre nuestros personajes</h2>
        {/* <Characters></Characters> */}
        </div>
    )
}