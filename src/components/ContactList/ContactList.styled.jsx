import styled from 'styled-components';

export const ContactsList = styled.ul`
  /*margin: 20px 0 0 -60px;*/
  margin-top: 20px;
  /*width: 100%;*/
`;

export const ContactsListItem = styled.li`
  /*width: 100%;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
	gap: 10px;
  pointer-events: none;
  color: #16093a;
  font-size: 20px;
  font-weight: 600;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: #cf2121;
  }
`;

export const ButtonDel = styled.button`
  margin-bottom: ${p => p.theme.spacing(3)};

  font-size: 18px;
  pointer-events: auto;
  color: #16093a;
  width: 130px;
  height: 35px;
  border-radius: 0 18px;
  background: transparent;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &::after {
    transition: 0.5s;
    content: '';
    width: 130px;
    height: 35px;
    box-shadow: 1px 1px 2px #c8d0e7, -2px -2px 3px #ffffff,
      0px 0px 0px inset #ffffff, 0px 0px 0px inset rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0 18px;
    border: 3px solid #e4ebf5;
    z-index: 1;
  }
  &:hover::after {
    box-shadow: 0px 0px 0px #c8d0e7, 0px 0px 0px #ffffff,
      -3px -3px 5px inset #ffffff, 3px 3px 5px inset rgba(0, 0, 0, 0.75);
  }

  &:hover h3 {
    color: #cf2121;
    letter-spacing: 1px;
  }
  &:active h3 {
    transition: 0.1s;
    letter-spacing: 2px;
  }
`;
