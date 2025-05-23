import { useEffect, useState } from "react";
import { useRef } from "react";
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const formatTime = (timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`
})

const timeInSeconds = (timeString) => {
    const split = timeString.split(':')
    const minutes = Number(split[0])
    const seconds = Number(split[1])

    return seconds + minutes * 60
}



const Player = ({ duration, randomSongIdFromArtist, randomSongIdFromArtist2, audio }) => {

    const audioPlayer = useRef();
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(formatTime(0))
    const durationInSeconds = timeInSeconds(duration)

    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
        setIsPlaying(!isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime))
    }


    useEffect(() => {
        const intervalID = setInterval(() => {
            if (isPlaying) {
                setCurrentTime(formatTime(audioPlayer.current.currentTime))

                progressBar.current.style.setProperty('--_progress', (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%")
            }
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [isPlaying])



    return (
        <div className="player">
            <div className="playerControllers">
                <Link to={`/song/${randomSongIdFromArtist2}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon className="player__icon player__icon--play"
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={() => playPause()}
                />

                <Link to={`/song/${randomSongIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>

            <div className="player__progress">
                <p>{currentTime}</p>
                <div className="player__bar">
                    <div ref={progressBar} className="player__bar-progress"></div>
                </div>
                <p>{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    )

}
export default Player