import axios from "axios";

const KEY = "AIzaSyBEJbdLrVY-cGofawtuxk_vCoA23sldCfA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    },
    headers: {}
});

