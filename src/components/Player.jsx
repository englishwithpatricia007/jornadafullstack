import React from "react";
import { faCirclePlay, faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Player = ({duration, randomSongIdFromArtist, randomSongIdFromArtist2}) => {
    return (
        <div className="player">
            <div className="playerControllers">
                <Link to={`/song/${randomSongIdFromArtist2}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>
                
                <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />

                <Link to={`/song/${randomSongIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>

            <div className="player__progress">
                <p>00:00</p>
                <div className="player__bar">
                    <div className="player__bar-progress"></div>
                </div>
                <p>{duration}</p>
            </div>
        </div>
    )

}
export default Player