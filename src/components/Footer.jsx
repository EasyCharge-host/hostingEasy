import { InstagramLogo } from "phosphor-react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaMailchimp, FaTiktok } from "react-icons/fa";

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    margin-bottom: 0.5rem;
  }
`;

const StyledLink = styled.a`
  font-weight: 600;
  color: #4a5568;
  transition: color 0.3s ease;

  &:hover {
    color: #2d3748;
  }
`;

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: static;
  bottom: 0px;
  width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <IconContainer>
        <InstagramLogo size={24} />
        <StyledLink
          href="https://www.instagram.com/easycharge_jc/"
          target="_blank"
          rel="noreferrer"
        >
          Follow us on Instagram
        </StyledLink>
      </IconContainer>
      <IconContainer>
        {/*LINKEDIN ICONCONTAINER*/}
        <FaLinkedin size={24} />
        <StyledLink
          href="https://www.linkedin.com/in/easycharge-jc-3a27802a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Flinktr.ee%2F"
          target="_blank"
          rel="noreferrer"
        >
          Follow on LinkedIn
        </StyledLink>
      </IconContainer>
      <IconContainer>
        {/*TIKTOK ICONCONTAINER*/}
        <FaTiktok size={24} />
        <StyledLink
          href="https://www.tiktok.com/@easycharge_jc?_t=8hwana6xjfo&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          Follow on TikTok
        </StyledLink>
      </IconContainer>

      {/*Facebook ICONCONTAINER*/}
      <IconContainer>
        <FaFacebook size={24} />
        <StyledLink
          href="https://www.facebook.com/people/EasyCharge-Jc/pfbid036zyuhy1GQvVZTZQdqoiP45cMowoVPcNpNdS92MGMoXM69agb8WnuvcXk9699W5oGl/"
          target="_blank"
          rel="noreferrer"
        >
          Follow on Facebook
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <FaMailchimp size={24} />
        <p className="font-semibold text-stone-600">
          Contact:{" "}
          <StyledLink href="mailto:office@easycharge-jc.com">
            office@easycharge-jc.com
          </StyledLink>
        </p>
      </IconContainer>
    </StyledFooter>
  );
}

export default Footer;
