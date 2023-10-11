import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.spacing(6)};
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: ${p => p.theme.colors.red};
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.beige};
  }

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.beige};
    padding: ${p => p.theme.spacing(1.5)};
    border-radius: 14px;
  }
`;
