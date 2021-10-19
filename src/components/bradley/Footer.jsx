import React from "react";
import styled from "styled-components";
import bottomVector from "../../assets/bradleyBottomVector.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterVector src={bottomVector} alt="graphic" />
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  position: relative;
`;

const FooterVector = styled.img`
  position: absolute;
  bottom: -20%;
`;

const FooterText = styled.p`

`;

export default Footer;