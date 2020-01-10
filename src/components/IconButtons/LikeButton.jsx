import React from "react";
// import Fragment from "react";
import "../../css/likeButton.css";
import IconButton from './IconButton';
// import styled from "styled-components";

const LikeButton = () => {
    const handleLikeButton = (e) => {
    // e.stopPropagation();
    console.log(e.target);
    // if(e.target.nodeName === 'SVG') {

    e.target.classList.toggle("liked");
    // }
    // e.target.classList.add('buttonLiked');
    //console.log(e.target.firstChild);
  };

  return (
      <IconButton onClick={handleLikeButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="512"
          height="512"
        >
          <path
            d="M24.85 10.126c2.018-4.783 6.628-8.125 11.99-8.125 7.223 0 12.425 6.179 13.079 13.543 0 0 .353 1.828-.424 5.119-1.058 4.482-3.545 8.464-6.898 11.503L24.85 48 7.402 32.165c-3.353-3.038-5.84-7.021-6.898-11.503-.777-3.291-.424-5.119-.424-5.119C.734 8.179 5.936 2 13.159 2c5.363 0 9.673 3.343 11.691 8.126z"
            data-original="#D75A4A"
            // class="active-path"
            data-old_color="#D75A4A"
            fill="#DDD"
          />
        </svg>
      </IconButton>
  );
};

export default LikeButton;
