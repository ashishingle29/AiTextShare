import React from "react";
import "./Youtube.css";

const Videoplayer = ({ videoId }) => {
    if (!videoId) {
        return (
            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                Search for a video
            </p>
        );
    }
    return (
        <div className="Video">
            <iframe
                title={videoId}
                className="video-iframe"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}


            />
        </div>
    );
};

export default Videoplayer;
