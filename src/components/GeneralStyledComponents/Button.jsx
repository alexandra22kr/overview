import styled from "styled-components";
import theme from "styled-theming";
import PropTypes from 'prop-types';
import colors from '../colors';

const btnFontSize = theme.variants("layout", "size", {
  small: {light: "0.5rem", dark: '0.5rem'},
  medium: {light: "1rem", dark: '1rem'},
  large: {light: "2rem", dark: '1.2rem'},
});

const btnColor = theme.variants("layout", "kind", {
  default: { light: 'var(--dark-blue-color)', dark: '#000' },
  danger: { light: colors.textColor, dark: colors.red },
  large: { light: "1.1rem", dark: "1.4rem" }
});

const btnBackground = theme.variants("layout", "kind", {
  default: { light: 'var(--blue-pink-gradient)', dark: 'var(--blue-pink-gradient)' },
  danger: { light: colors.red, dark: colors.red },
  large: { light: "2rem", dark: "1.4rem" }
});

const btnBorderColor = theme.variants('layout', 'kind', {
  default: { light: 'var(--blue-pink-gradient)', dark: 'var(--blue-pink-gradient)' },
  danger: { light: colors.red, dark: colors.red },
});

const btnHoverColor = theme.variants('layout', 'kind', {
  default: { light: colors.textColor, dark: '#fff' },
  danger: { light: colors.red, dark: colors.red },
});

const btnBackgroundColor = theme.variants('layout', 'kind', {
  default: { light: '#fff', dark: '#fff' },
  danger: { light: colors.red, dark: colors.red },
});

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: ${btnFontSize};
  background: ${btnBackground};
  color: ${btnColor};
  border: 1px solid ${btnBorderColor};
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: .3s;
  background-size: 150% auto;

  &:hover {
    background-position: right center;
    color: #000;
    // opacity: .8;
  }
`;

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  kind: PropTypes.oneOf(['default', 'danger'])
};

Button.defaultProps = {
  size: 'medium',
  kind: 'default'
};
// configure propTypes and defaultProps for Button


// const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   outline: none;
// `;

export default Button;
