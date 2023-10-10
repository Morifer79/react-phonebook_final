import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GreetUser = styled.p`
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: #16093a;
`;

export const BattonLogOut = styled.button`
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: #cf2121;
  border: none;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    color: #d0ac69;
  }
`;

export const UserLogo = styled.img`
  width: 60px;
  padding: 5px;
  border-radius: 50%;
`;
