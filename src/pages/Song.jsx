import React from "react";
import Player from "../components/Player";
import { Link } from "react-router-dom";

const Song = () => {
    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container>">
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
                        alt="Imagem da Música X"
                    />
                </div>
            </div>

            <div className="song__bar">
                <Link to="/artist/1" className="song__artist-image">
                    <img
                        width={75}
                        heigth={75}
                        src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
                        alt="Imagem do artista Y"
                    />
                </Link>

                <Player />

                <div>
                    <p className="song__name">Última Saudade - Ao Vivo</p>
                    <p>Henrique & Juliano</p>
                </div>
            </div>
        </div>
    )
}

export default Song;