// import React from 'react'
// // import google from 'googleapis'
// import './Youtube.css'

// async function Youtube() {

//     //     const youtube = google.youtube({
//     //         version: 'v3',
//     //         auth: "AIzaSyBEJbdLrVY-cGofawtuxk_vCoA23sldCfA"
//     //     });

//     //     let videoId = 'd5bhB97UJIo';

//     //     console.log(youtube);

//     //     const response = await youtube.videos.list({
//     //         part: 'snippet',
//     //         id: videoId
//     //     });
//     // console.log("Comming from Response", response)
//     //     const videoData = response.data.items[0];

//     //   return (
//     //       <div>
//     //           <h2>{videoData.snippet.title}</h2>
//     //           <p>{videoData.snippet.description}</p>
//     //           <ReactPlayer url={`https://www.youtube.com/watch?v=${videoData.id}`} />
//     //       </div>
//     //   )




//     ///.........................2nd method..................

//     // const auth = new google.auth.GoogleAuth({
//     //     keyFile: 'AIzaSyBEJbdLrVY-cGofawtuxk_vCoA23sldCfA', // Or specify your credentials directly
//     //     scopes: ['https://www.googleapis.com/auth/youtube.readonly']
//     // });

//     // const youtube = google.youtube({
//     //     version: 'v3',
//     //     auth: auth
//     // });


//     // const videoId = 'd5bhB97UJIo';

//     // const response = await youtube.videos.list({
//     //     part: 'snippet',
//     //     id: videoId
//     // });

//     // const videoData = response.data.items[0];

//     // //...........................................

//     // const VideoPlayer = ({ videoId, title, description }) => {
//     //     return (
//     //         <div>
//     //             <h2>{title}</h2>
//     //             <p>{description}</p>
//     //             <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
//     //         </div>
//     //     );
//     // };


//     // // Retrieve the video data using the YouTube Data API
//     // // ...

//     // return (
//     //     <VideoPlayer
//     //         videoId={videoData.id}
//     //         title={videoData.snippet.title}
//     //         description={videoData.snippet.description}
//     //     />
//     // );

//     //......................end data................................


    // const apiKey = 'AIzaSyBEJbdLrVY-cGofawtuxk_vCoA23sldCfA';
    // const videoId = 'd5bhB97UJIo';
    // const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

//     // axios.get(apiUrl)
//     //     .then(response => {
//     //         const videoData = response.data.items[0].snippet;
//     //         // set the video data to the state or props
//     //         console.log(videoData)
//     //     })
//     //     .catch(error => {
//     //         console.log(error);
//     //     });





//     return (
//         <div>
//             hello
//         </div>
//     );

















// }

// export default Youtube