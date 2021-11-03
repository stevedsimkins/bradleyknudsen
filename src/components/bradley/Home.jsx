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
  position: absolute;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
  height: auto;
  @media(min-width: 500px){
    top: -10%;
  }
  @media(min-width: 690px){
    top: -20%;
  }
  @media(min-width:870px){
    top: -30%;
  }
  @media(min-width: 1000px){
    top: -40%;
  }
  @media(min-width: 1200px){
    top: -55%;
  }
`;

const LeftVector = styled.img`
  left: 0;
  bottom: -10%;
  position: absolute;
  transition: all 0.5s ease-in-out;
  @media(min-width: 740px){
    width: 45%;
    bottom: -30%;
  }
  @media(min-width: 830px){
    width: 40%;
  }
  @media(min-width: 920px){
    width: 35%;
  }
  @media(min-width: 1000px){
    width: 30%;
  }
`;

const RightVector = styled.img`
  position: absolute;
  right: 0;
  bottom: -10%;
  transition: all 0.5s ease-in-out;
  @media(min-width: 740px){
    width: 45%;
    bottom: -35%;
  }
  @media(min-width: 830px){
    width: 40%;
  }
  @media(min-width: 920px){
    width: 35%;
  }
  @media(min-width: 1000px){
    width: 30%;
  }
`

export default Home;
