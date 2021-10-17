import React from "react";
import styled from "styled-components";
import synth from "../../assets/bradleySynth.svg";

const Intro = () => {
  return (
    <IntroContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet.
      </p>
      <SynthVector src={synth} alt="synth graphic" />
    </IntroContainer>
  )
};

const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    width: 80%;
  }
`;

const IntroText = styled.p`

`;

const SynthVector = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 100px;
`;

export default Intro;

