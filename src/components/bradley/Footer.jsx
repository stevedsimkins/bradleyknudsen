import React from "react";
import styled from "styled-components";
import bottomVectorMobile from "../../assets/bradleyBottomVectorMobile.svg";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterVector src={bottomVectorMobile} alt="graphic" />
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
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.p`

`;

export default Footer;
