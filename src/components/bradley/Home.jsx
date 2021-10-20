import React from "react";
import styled from "styled-components";

//Assets 
import topVector from "../../assets/bradleyTopVector.svg";
import leftVector from "../../assets/bradleyLeftVector.svg";
import rightVector from "../../assets/bradleyRightVector.svg";

const Home = () => {
  return (
    <LandingContainer>
      <TopVector src={topVector} alt="graphic" />
      <LeftVector src={leftVector} alt="graphic" />
      <RightVector src={rightVector} alt="graphic" />
      <LandingCopy>
        <Logo>Bradley Knudsen</Logo>
        <h4>Analogue Synthesizer Composer</h4>
      </LandingCopy>
    </LandingContainer>
  )
};

const LandingContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

`;

const LandingCopy = styled.div`
  width: 70%;
  text-align:center;
  h1, h4 {
  padding: 1rem;
  }
  @media(min-width: 900px){
    h4{
      font-size: 38px;
    }
  }
`;

const Logo = styled.h1`
  font-size: 90px;
  font-weight: 700;
  line-height: 100%;
  @media(max-width: 500px){
    font-size: 67px;
  }
`;

const TopVector = styled.img`
  width: 100%;
  height: 25%;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-in-out;
  @media(min-width: 700px){
    height: 30%;
  }
`;

const LeftVector = styled.img`
  width: 100%;
  position: absolute;
  left: -60%;
  bottom: 0;
  transition: all 0.5s ease-in-out;
  @media(min-width: 700px){
    bottom: -30%;
    left: -40%;
  }
`;

const RightVector = styled.img`
  width: 350px;
  position: absolute;
  bottom: -9%;
  right: -60%;
  transition: all 0.5s ease-in-out;
  @media(min-width: 700px){
    right: 0;
    width: 50%;
    bottom: -20%;
  }
`

export default Home;
