import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateClassName } from 'styled-components';
import theme from "styled-theming";
import "../css/avatar.css";

// const AvatarSvg

const AvatarIcon = styled.div`
  max-height: 60px;
  max-width: 60px;
  background: none;
  border: 0;
  background-color: transparent;
  background-image: url("./img/profile.png"); //! fix
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin: 1em;
  box-shadow: inset 0 0 0 3px #ff9900;
  position: relative;
  vertical-align: middle;
  cursor: pointer;

  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .spin {
    width: 5em;
    height: 5em;
    padding: 0;

    &:hover {
      color: #fff;
    }

    &::before,
    &::after {
      top: 0;
      left: 0;
    }

    &::before {
      border: 2px solid transparent;
    }

    &:hover::before {
      border-top-color: #fff;
      border-right-color: #ffffff;
      border-bottom-color: #fff;
      transition: border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.1s,
        border-bottom-color 0.15s linear 0.2s;
    }

    &::after {
      border: 0 solid transparent;
    }

    &:hover::after {
      border-top: 2px solid #fff;
      border-left-width: 2px;
      border-right-width: 2px;
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
      transition: border-left-width 0s linear 0.35s,
        -webkit-transform 0.4s linear 0s;
      transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
      transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s,
        -webkit-transform 0.4s linear 0s;
    }
  }
`;


const Avatar = () => {
  return (
    <Link to="/user">
      <AvatarIcon className="avatar spin circle"></AvatarIcon>
    </Link>
  );
};

export default Avatar;
