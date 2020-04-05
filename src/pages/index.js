import React from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import { countriesUrl } from '../utils/globals';
import * as consoleSaveJson from '../utils/consoleSaveJson';

const LOCATION = {
  lat: 38.9072,
  lng: -77.0369
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const IndexPage = () => {
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect
  };

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   */
  async function mapEffect({ leafletElement: map } = {}) {
    // This function is used to run code that fires when the map renders.
    let response;

    try {
      response = await axios.get(countriesUrl);
    } catch (e) {
      // console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;
    // console.log(data);

    const hasData = Array.isArray(data) && data.length > 0;
    if (!hasData) return;

    const geoJson = {
      type: 'FeatureCollection',
      features: data.map((country = {}) => {
        const { countryInfo = {} } = country;
        const { lat, long: lng } = countryInfo;
        return {
          type: 'Feature',
          properties: {
            ...country,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          }
        }
      })
    }

    console.log(consoleSaveJson);
    console.save(geoJson, "geoJson.json");
  }

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings} />

      <Container type="content" className="text-center home-start">
        <h2>React COVID-19 Monitoring</h2>
        <pre>
          <code>Developed by DouglasPonce85</code>
        </pre>
      </Container>
    </Layout>
  );
};

export default IndexPage;
