import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: #cf2121;

  &:hover {
    color: #d0ac69;
  }
  &.active {
    color: white;
    background-color: #d0ac69;
    padding: 3px;
    border-radius: 14px;
  }
`;
