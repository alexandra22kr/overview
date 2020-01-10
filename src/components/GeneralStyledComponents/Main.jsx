import styled from "styled-components";

const background = theme.variants("layout", {
    light: '#fff', 
    dark: '#000'
  });

const Main = styled.main`
    background: ${background},
`;

export default Main;