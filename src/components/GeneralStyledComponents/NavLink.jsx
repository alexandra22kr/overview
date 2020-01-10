import styled from "styled-components";
import theme from "styled-theming";
import PropTypes from 'prop-types';
import colors from '../colors';
import { Link } from 'react-router-dom';

const linkColor = theme.variants("layout", {
    light: '#222', 
    dark: '#000'
  });

const NavLink = styled(Link)`
    display: block;
    color: ${linkColor};
    font-size: 20px;
    padding: 10px 20px;
    font-family: var(--text-font);

    &.active {

    }
`;

export default NavLink;