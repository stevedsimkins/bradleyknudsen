import React from "react";
import styled from "styled-components";
import knob1 from "../../assets/bradleyWorkKnob1.svg";
import knob2 from "../../assets/bradleyWorkKnob2.svg";
import knob3 from "../../assets/bradleyWorkKnob3.svg";

const Work = () => {
  return (
    <WorkContainer>
      <h2>Work</h2>
      <WorkList>
        <img src={knob1} alt="graphic" />
        <h3>Aestival Daze</h3>
      </WorkList>
      <WorkList>
        <img src={knob2} alt="graphic" />
        <h3>Bandcamp</h3>
      </WorkList>
      <WorkList>
        <img src={knob3} alt="graphic" />
        <h3>Spotify</h3>
      </WorkList>
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  text-align: center;
`;

const WorkList = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export default Work;
