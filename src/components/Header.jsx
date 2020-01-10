import React from "react";
import NavBar from "./NavBar";
import Avatar from "./Avatar";
import ButtonChangeMode from "./GeneralStyledComponents/ButtonChangeMode";
import MoreButton from "./IconButtons/MoreButton";
import styled, { ThemeProvider } from "styled-components";
import "../css/all.css";

// const testStyle = [
//     {
//         color: 'var(--colar-color)',

//     },

// ];

const Header = () => {
  const handleChangeMode = e => {
    console.log("rrr", e.target);
    console.log("change mode");
  };

  return (
    <header>
      {/* <ThemeProvider theme={{ layout: "light" }}> */}
      <NavBar />
      <ButtonChangeMode onClick={handleChangeMode} />
      <Avatar />
      {/* <MoreButton /> */}
      {/* </ThemeProvider> */}
    </header>
  );
};

export default Header;
