import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
    return (
        <Link to="/song/1" className="song-item">

            <div className="song-item__number-album" >

                <p>1</p>
                <div className="song-item__album" >
                    <img className="song-item__image"
                        src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
                        alt="Imagem da Música X"
                    />

                    <p className="song-item__name" >Xonei</p>
                </div>
            </div>
            <p>02:30</p>


        </Link>
    )
}

export default SongItem