import React from 'react';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';

import '../public/css/styles.css';

const HomePage = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <StyleProvider>
      <ThemePicker variant='light'>
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>
);

export default HomePage;
