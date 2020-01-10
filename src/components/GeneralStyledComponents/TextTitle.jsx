import styled from "styled-components";
// import '../../css/all.css';

const TextTitle = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  display: inline-block;
  font-family: var(--text-font);
  color: ${props => props.color ? props.color : 'var(--colar-color)'};
  font-size: ${props => props.fz ? props.fz : '28px'};
`;

export default TextTitle;
