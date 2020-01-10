import styled from 'styled-components';
import colors from '../colors';

const fontSize = theme('size', {
    small: '0.8em',
    normal: '1em',
    large: '1.2em',
  });

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    font-size: ${fontSize};
`;

export default Container;