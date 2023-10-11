import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(6)};
`;

export const GreetUser = styled.p`
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: ${p => p.theme.colors.blue};
`;

export const BattonLogOut = styled.button`
  font-family: 'Monotype Corsiva';
  font-size: 26px;
  font-weight: 700;
  color: ${p => p.theme.colors.red};
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.beige};
  }
`;

export const UserLogo = styled.img`
  width: 60px;
  padding: ${p => p.theme.spacing(2.5)};
  border-radius: 50%;
`;
