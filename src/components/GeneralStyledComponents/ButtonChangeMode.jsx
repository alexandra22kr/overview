import styled from "styled-components";
import React from 'react';
import '../../css/buttonChangeMode.css';
  
const handleClick = (e) => {
    console.log(e.target);
    if(e.target.nodeName === 'BUTTON') {
        // e.target.classList.toggle('background--on');
        e.target.classList.toggle('toggle-body--on');
        e.target.firstElementChild.classList.toggle('toggle-btn--on');
        e.target.firstElementChild.classList.toggle('toggle-btn--scale');
    } else {
        e.target.parentNode.classList.toggle('toggle-body--on');
        e.target.classList.toggle('toggle-btn--on');
        e.target.classList.toggle('toggle-btn--scale');
    }
}

const ButtonChangeMode = () => {
  return (
    // <div class="background">
      <button class="toggle-body" onClick={handleClick}>
        <div class="toggle-btn"></div>
      </button>
    // </div>
  )
}

export default ButtonChangeMode;
