import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video({ url,channel,description,song,likes,messages,shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef("null");

  const handleVideoPress = () => {
    // If video is playing, stop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    // otherwise play
    else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      {/*app conatiner   */}

      <video
        onClick={handleVideoPress}
        ref={videoRef}
        loop
        className="video_player"
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* video footer  */}
      <VideoFooter
        channel={channel}
        description= {description}
        song={song}
      />
      {/* video sidebar  */}
      <videoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
