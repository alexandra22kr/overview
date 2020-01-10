import styled from "styled-components";
import theme from "styled-theming";
import PropTypes from 'prop-types';
import colors from '../colors';
import { Link } from 'react-router-dom';

const NavLink = styled.li`
    display: block;
    color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    font-family: var(--text-font);

    &.active {
        
    }
`;

export default NavLink;