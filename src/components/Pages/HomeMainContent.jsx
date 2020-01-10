import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import "../../css/all.css";

import LikeButton from "../IconButtons/LikeButton";
import CommentButton from "../IconButtons/CommentButton";
import Paragraph from "../GeneralStyledComponents/Paragraph";
import TextTitle from "../GeneralStyledComponents/TextTitle";
import Input from "../GeneralStyledComponents/Input";
import Button from "../GeneralStyledComponents/Button";
import ContentItem from "../GeneralStyledComponents/ContentItem";
import ContentBlock from "../GeneralStyledComponents/ContentBlock";
import ContentItemImage from "../GeneralStyledComponents/ContentItemImage";
import Slider from '../Slider';

import { withTheme } from "styled-components";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

const HomeMain = () => {
  return (
    // <ThemeProvider theme={{ layout: "light" }}>
      <Slider />
      // <main className="container">
      //   <div className="blue">
      //     <TextTitle>Home</TextTitle>
      //     <Button>bbtttnn</Button>
      //   </div>
      // </main>
    // </ThemeProvider>
  );
};

export default HomeMain;
