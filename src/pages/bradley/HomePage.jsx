import React, { useState } from "react";
import ReactJKMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/lib/styles/index.less'
import 'react-jinke-music-player/assets/index.css';
import Home from "../../components/bradley/Home";
import Intro from "../../components/bradley/Intro";
import Work from "../../components/bradley/Work";
import Contact from "../../components/bradley/Contact";
import Footer from "../../components/bradley/Footer";
import cover from "../../assets/coverphoto1.png";
import bellsFromTheDepths from "../../audio/bells-from-the-depths.m4a";
import fracturedFaith from "../../audio/fractured-faith.m4a";
import intoToPsychocartography from "../../audio/intro-to-psychocartography.m4a";
import rainOnALake from "../../audio/rain-on-a-lake.m4a";
import sleepyHollow from "../../audio/sleepy-hollow.m4a";
import theTransfiguration from "../../audio/the-transfiguration.m4a";

const HomePage = () => {

  const [audioList, setAudioList] = useState([
    { musicSrc: bellsFromTheDepths, name: "Bells from the Depths", cover: cover, singer: "Bradley Knudsen" },
    { musicSrc: intoToPsychocartography, name: "Intro to Psychocartography", cover: cover, singer: "Bradley Knudsen" },
    { musicSrc: fracturedFaith, name: "Fractured Faith", cover: cover, singer: "Bradley Knudsen" },
    { musicSrc: rainOnALake, name: "Rain on a Lake", cover: cover, singer: "Bradley Knudsen" },
    { musicSrc: sleepyHollow, name: "Sleepy Hollow", cover: cover, singer: "Bradley Knudsen" },
    { musicSrc: theTransfiguration, name: "The Transfiguration", cover: cover, singer: "Bradley Knudsen" },
  ]);


  return (
    <>
      <ReactJKMusicPlayer
        defaultPosition={{ bottom: 10, right: 10 }}
        theme={"light"}
        showDownload={false}
        audioLists={audioList}
        remove={false}
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
