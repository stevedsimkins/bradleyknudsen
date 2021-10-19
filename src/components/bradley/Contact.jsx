import React from "react";
import styled from "styled-components";
import facebook from "../../assets/bradleyFacebook.svg";
import twitter from "../../assets/bradleyTwitter.svg";
import instagram from "../../assets/bradleyInstagram.svg";

const Contact = () => {
  return(
    <ContactContainer>
      <h2>Contact </h2>
      <h4>bradleyknudsen@gmail.com</h4>
      <IconContainer>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </IconContainer>
    </ContactContainer>
  )
};

const ContactContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2, h4, div{
    padding: 2rem 0rem;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Contact;