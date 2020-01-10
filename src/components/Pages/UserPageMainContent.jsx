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

import { withTheme } from "styled-components";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

const UserPageMain = () => {
  return (
    // <ThemeProvider theme={{ layout: "light" }}>
      <main className="container">
        <div className="yellow">
          <h3>User page</h3>
          
        </div>
      </main>
    // </ThemeProvider>
  );
};

export default UserPageMain;
