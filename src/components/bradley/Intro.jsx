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
  @media(min-width: 700px){
    margin-top: 10rem;
    p{
      width: 400px;
    }
  }
`;


const SynthVector = styled.img`
  width: 80%;
  height: auto;
  margin-top: 100px;
  @media(min-width: 700px){
    width: 400px;
  }
`;

export default Intro;

