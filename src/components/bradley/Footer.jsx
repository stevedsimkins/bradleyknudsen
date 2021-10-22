import React from "react";
import styled from "styled-components";
import bottomVector from "../../assets/bradleyBottomVector.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterVector src={bottomVector} alt="graphic" />
      <p>Designed by stevedsimkins</p>
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  p {
    text-align: center;
    bottom: 10%;
    z-index: 3;
  }
  @media(min-width: 1100px){
    min-height: 80vh;
  }
`;

const FooterVector = styled.img`
  position: absolute;
  bottom: -20%;
  width: 100%;
  object-fit: contain;
  @media(min-width: 700px){
    bottom: -50%;
  }
  @media(min-width: 900px){
    bottom: -70%;
  }
  @media(min-width:1100px){
    bottom: -120vh;
  }
`;

const FooterText = styled.p`

`;

export default Footer;
