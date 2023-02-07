import { Link } from "react-router-dom";
import GalleryDetail from "../GalleryDetail/GalleryDetail";
import "./Gallery.scss";

export default function Gallery({ list }) {
    return (
      <div className="c-gallery">
        {list.map((item, index) => 
        <Link to={"/characters/" + item._id}> 
        <GalleryDetail key={index} data={item}></GalleryDetail>
        {/* se puede pintar directamente el componente GalleryDetail porque son iguales*/}
          {/* <figure key={index} className={"c-gallery__item"} >
          <div className="c-gallery__text">
                <figcaption>{item.name}</figcaption>
            </div>
            <img className="c-gallery__img" src={item.imageUrl} alt={item.name} />
          </figure> */}
          </Link>
        )}
      </div>
    );
  }