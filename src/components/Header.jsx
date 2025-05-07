import React from "react";
import spotifyLogo from "../assets/spotify-logo.png"

const Header = () => {
    return <div className="header">
        <img src={spotifyLogo}></img>
        <a className="header__link"   href="/">
            <h1>Spotify</h1>

        </a>
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