import React from "react";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";

const SongList = () => {
    return (
        <div className="song-list">
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />

            <p className="song-list__see-more">Ver mais</p>
        </div>
    )
}

export default SongList