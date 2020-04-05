import React from 'react';

import Container from 'components/Container';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-links">
          <a href="https://github.com/DouglasPonce85/react-covid-ratchet">
            <FaGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/douglasponce85/">
            <FaLinkedin /> Linkedin
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
