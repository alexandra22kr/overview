import styled from "styled-components";

const ContentItem = styled.div`
  margin: 20px 0;
  width: 28%;
  background: none;
  //box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.24);
  border: 5px solid var(--blue-pink-gradient);
  border-width: 3px;
  border-style: solid;
  border-image: var(--blue-pink-gradient) 1 1;

  &:hover {
    background: var(--blue-pink-gradient);
  }
`;

export default ContentItem;
