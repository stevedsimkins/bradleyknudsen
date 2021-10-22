import React, { useState } from "react";
import ReactJKMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/lib/styles/index.less'
import 'react-jinke-music-player/assets/index.css';
import Home from "../../components/bradley/Home";
import Intro from "../../components/bradley/Intro";
import Work from "../../components/bradley/Work";
import Contact from "../../components/bradley/Contact";
import Footer from "../../components/bradley/Footer";
import track1 from "../../audio/track1.wav";

const HomePage = () => {

  const [audioList, setAudioList] = useState([
    { musicSrc: track1 }
  ]);


  return (
    <>
      <ReactJKMusicPlayer
        defaultPosition={{ bottom: 0, right: 0 }}
        theme={"light"}
        showDownload={false}
        audioLists={audioList}
      />
      <Home />
      <Intro />
      <Work />
      <Contact />
      <Footer />
    </>
  )
};

export default HomePage;
