import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain="app-tfm.eu.auth0.com"
    clientId="NzCiCUSYYRwCoqbg2mbOxpyPrP5yrCTq"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);