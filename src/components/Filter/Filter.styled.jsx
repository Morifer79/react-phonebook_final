import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: ${p => p.theme.spacing(8)};
  margin: 0 auto 0 70px;
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  height: 40px;
  background: transparent;
  display: flex;
  align-items: center;
  transition: 0.5s;
  border-radius: 0px 18px;
  border: 3px solid #e4ebf5;
  box-shadow: 1px 1px 2px #c8d0e7, -2px -2px 3px #ffffff,
    0px 0px 0px inset #ffffff, 0px 0px 0px inset rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  outline: 0;

  &::after {
    transition: 0.5s;
    content: '';
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px #c8d0e7, 0px 0px 0px #ffffff,
      -3px -3px 5px inset #ffffff, 3px 3px 5px inset rgba(0, 0, 0, 0.75);
  }
`;

export const SearchLabelText = styled.h2`
  color: #cf2121;
  font-size: 18px;
  margin-left: 70px;
`;
