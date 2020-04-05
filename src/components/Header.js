import React from 'react';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <img src="https://brands.home-assistant.io/coronavirus/logo.png" alt="covid" />
      <Container type="content">
        <h1>Coronavirus (COVID-19) | Monitoring App</h1>
        <h4>Developed by DouglasPonce85</h4>
      </Container>
    </header>
  );
};

export default Header;
