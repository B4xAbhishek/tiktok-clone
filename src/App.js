import React, {useEffect,useState} from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {

const [videos,setVideos] = useState ([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();

  },[]);

  console.log(videos);
   
  return (
    <div className="app">
      {/*app conatiner   */}

      <div className="app_videos">

      {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}

          <h2>Tiktok clone app - </h2>
        {/* <Video
          url="/Video/video5.mp4"
          channel="sunday"
          description="this is redux can be used here"
          song="song red rtu"
          likes={123}
          messages={234}
          shares={346}
        />

        <Video
          url="/Video/video2.mp4"
          channel="sunday"
          description="this is redux can be used here 2"
          song="song red rtu"
          likes={123}
          messages={234}
          shares={346}
        /> */}


      </div>
    </div>
  );
}

export default App;
