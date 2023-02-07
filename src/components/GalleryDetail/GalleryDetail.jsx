import "./GalleryDetail.scss";
export default function GalleryDetail({data}) {

    return <div>
        <figure className="c-gallery__item">
          <div className="c-gallery__text">
                <figcaption>{data.name}</figcaption>
            </div>
            <img className="c-gallery__img" src={data.imageUrl} alt={data.name} />
          </figure>
    </div>
}