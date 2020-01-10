import React from "react";
import Fragment from "react";
import IconButton from "./IconButton";
import styled from "styled-components";

const CommentButton = () => {
  return (
    <IconButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        width="512"
        height="512"
      >
        <path
          d="M30 1.5c-16.542 0-30 12.112-30 27 0 5.205 1.647 10.246 4.768 14.604-.591 6.537-2.175 11.39-4.475 13.689a1 1 0 00.847 1.697c.405-.057 9.813-1.412 16.617-5.338C21.622 54.711 25.738 55.5 30 55.5c16.542 0 30-12.112 30-27s-13.458-27-30-27z"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#98DDDE"
        />
      </svg>
    </IconButton>
  );
};

export default CommentButton;
