import React, { useState, useEffect } from 'react';
import axios  from 'axios';

const Youtube = ({ title, description }) => {

    const apiKey = 'AIzaSyBEJbdLrVY-cGofawtuxk_vCoA23sldCfA';
    const videoId = 'd5bhB97UJIo';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;



    axios.get(apiUrl)
        .then(response => {
            const videoData = response.data.items[0].snippet;
            // set the video data to the state or props
            console.log(videoData);
        })
        .catch(error => {
            console.log(error);
        });

    



    const [playerState, setPlayerState] = useState({
        videoId: videoId,
        playerVars: {
            autoplay: 0,
            controls: 1
        }
    });

    useEffect(() => {
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('player', {
                ...playerState,
                events: {
                    onReady: onPlayerReady
                }
            });
        };

        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [playerState]);

    const onPlayerReady = event => {
        event.target.playVideo();
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div id="player"></div>
        </div>
    );
};

const App = () => {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                const videoData = response.data.items[0].snippet;
                setVideoData(videoData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <VideoPlayer
            videoId={videoId}
            title={videoData.title}
            description={videoData.description}
        />
    );
};


export default Youtube