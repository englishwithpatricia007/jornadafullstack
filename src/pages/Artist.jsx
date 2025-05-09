import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

//   Assuming a route pattern like 
// `/posts/:postId` is matched by `/posts/123` then `params.postId` will be `"123"`.


const Artist = () => {

    const { id } = useParams();

    const {name, banner} = artistArray.filter(
        currentArtistObj => currentArtistObj.id == id)[0]

    const songsArrayFromArtist = songsArray.filter(
        currentSongObj => currentSongObj.artist === name)

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    /** Math.random() Returns a pseudorandom number between 0 and 1. */

    const randomSongIdFromArtist = songsArrayFromArtist[randomIndex].id;

    return (
        <div className="artist">
            <div className="artist__header" style={{
                backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`
            }}>

                <h2 className="artist__title">{name}</h2>

            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongList songsArray={songsArrayFromArtist} />
            </div>
            <Link to={`/song/${randomSongIdFromArtist}`}>
                <FontAwesomeIcon
                    className="single-item__icon single-item__icon--artist"
                    icon={faCirclePlay}
                />
            </Link>
        </div>
    )
}

export default Artist;