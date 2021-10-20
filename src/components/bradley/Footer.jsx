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
`;

const FooterVector = styled.img`
  position: absolute;
  bottom: -20%;
  width: 100%;
`;

const FooterText = styled.p`

`;

export default Footer;
