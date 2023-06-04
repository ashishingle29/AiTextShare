import React from "react";
import youtubeApi from "./Api";
import Search from "./Search";

import VideoList from "./VideoList";
import Videoplayer from "./VideoPlayer";

import "./Youtube.css";


export default class App extends React.Component {
    state = {
        videosMetaInfo: [],
        selectedVideoId: null,
    };
    onVideoSelected = (videoId) => {
        this.setState({ selectedVideoId: videoId });
    };
    onSearch = async (keyword) => {
        const response = await youtubeApi.get("/search", {
            params: {
                q: keyword,
            },
        });
        this.setState({
            videosMetaInfo: response.data.items,
            selectedVideoId: response.data.items[0].id.videoId,
        });
        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <VideoList
                    onVideoSelected={this.onVideoSelected}
                    data={this.state.videosMetaInfo}
                />

                <div className="Body">
                    <div className="Description">
                        {/* <p>Description</p> */}
                    </div>
                    <Videoplayer videoId={this.state.selectedVideoId} />
                    <div className="Comment">
                        {/* <p>Comments</p> */}
                    </div>
                </div>

                <Search onSearch={this.onSearch} />
            </div>
        );
    }
}