import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import HomeMain from './components/Pages/HomeMainContent';
import Footer from './components/Footer';
import styled, {ThemeProvider} from 'styled-components';

const App = () => (
  // <ThemeProvider theme={{ layout: 'dark' }}>

  <Fragment>
    <Header />
    <HomeMain />
    <Footer />
  </Fragment>
  // </ThemeProvider>
);

export default App;
