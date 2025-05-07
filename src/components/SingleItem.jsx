import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleItem = ({ id, name, image, artist, idPath }) => {
    return (
        <a href={`${idPath}/${id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img className="single-item__image" src={image}
                        alt={`Imagem do artista ${name}`}
                    />
                </div>
                <FontAwesomeIcon
                    className="single-item__icon"
                    icon={faCirclePlay}
                />
            </div>

            <div className="single-item__texts">
                <div className="sing-item__2lines">
                    <p className="single-item__title">{name}</p>
                    <p className="single-item__type">
                        {artist ?? "Artista"} 
                    </p>
                </div>
            </div>
        </a>
    )

}

export default SingleItem