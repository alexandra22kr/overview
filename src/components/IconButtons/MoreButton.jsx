import React from "react";
import Fragment from "react";
import "../../css/likeButton.css";
import IconButton from "./IconButton";
import styled from "styled-components";

const MoreButton = () => {
  return (
    <IconButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 384"
        width="512"
        height="512"
      >
        <circle
          cx="192"
          cy="42.667"
          r="42.667"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#FFF"
        />
        <circle
          cx="192"
          cy="192"
          r="42.667"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#FFF"
        />
        <circle
          cx="192"
          cy="341.333"
          r="42.667"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#FFF"
        />
      </svg>
    </IconButton>
  );
};

export default MoreButton;
