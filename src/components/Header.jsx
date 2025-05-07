import React from "react";
import spotifyLogo from "../assets/spotify-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return <div className="header">
        <Link to="/">
            <img src={spotifyLogo}></img>
        </Link>

        <Link to="/" className="header__link">
            <h1>Spotify</h1>

        </Link>
    </div>

}

export default Header


//Nomeação de classes em CSS: metodologia BEM : B E M
//Blocks Elements Modifier

//componente (ex. Header)
//bloco__elemento--modificador
//header
//header__link
//header__link--small

//nomes compostos são separados por -
//item-list__texts