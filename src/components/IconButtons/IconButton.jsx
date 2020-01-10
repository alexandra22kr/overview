import React from "react";
import styled from "styled-components";

const IconButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
`;

// const IconButton = ({ clidren }) => (
//     <StyledIconButton>{clidren}</StyledIconButton>
// );
// render(
//     <button></button>
// );

export default props => <IconButton>{props.children}</IconButton>;