import styled from "styled-components";
// import '../../css/all.css';

const Paragraph = styled.p`
    font-size: 16;
    font-family: var(--text-font);
    color: ${props => (props.color ? props.color : 'var(--text-color)')};
`;

export default Paragraph;