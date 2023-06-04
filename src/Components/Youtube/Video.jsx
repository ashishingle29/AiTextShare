import React from "react";
import "./Youtube.css";

function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    width: "100%",
    position: "relative",
  };
  return _styles;
}

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div
        className="VideoCards"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected)}
      >
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        {/* <p className="title">{snippet.title}</p> */}
      </div>
    );
  });
}
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;
