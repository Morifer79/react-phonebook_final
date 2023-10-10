import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
`;

export const Hr = styled.hr`
  margin: 0;
  height: 10px;
  border: none;
  color: #d0ac69;
  background-image: linear-gradient(
    90deg,
    #d0ac69,
    #d0ac69 33.33%,
    transparent 33.33%,
    transparent 100%
  );
  background-size: 3px 100%;
`;
