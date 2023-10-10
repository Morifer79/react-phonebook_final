import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 160px;
  left: 32%;
`;

export const Form = styled.form`
  width: 320px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  padding: ${p => p.theme.spacing(8)};
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  background: transparent;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 0px 18px;
  border: 3px solid #e4ebf5;
  box-shadow: 1px 1px 2px #c8d0e7, -2px -2px 3px #ffffff,
    0px 0px 0px inset #ffffff, 0px 0px 0px inset rgba(0, 0, 0, 0.75);
  position: relative;
  transition: 0.5s;
  outline: 0;

  &::after {
    transition: 0.5s;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px #c8d0e7, 0px 0px 0px #ffffff,
      -3px -3px 5px inset #ffffff, 3px 3px 5px inset rgba(0, 0, 0, 0.75);
  }

  &:invalid {
    border-color: #cf2121;
  }
`;

export const ButtonReg = styled.button`
  margin: 0 auto 40px;
  width: 180px;
  height: 40px;
  border-radius: 0 18px;
  background: transparent;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &::after {
    transition: 0.5s;
    content: '';
    width: 180px;
    height: 40px;
    box-shadow: 1px 1px 2px #c8d0e7, -2px -2px 3px #ffffff,
      0px 0px 0px inset #ffffff, 0px 0px 0px inset rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0 18px;
    border: 3px solid #e4ebf5;
    z-index: 1;
  }
  &:hover {
    box-shadow: 0px 0px 0px #c8d0e7, 0px 0px 0px #ffffff,
      -3px -3px 5px inset #ffffff, 3px 3px 5px inset rgba(0, 0, 0, 0.75);
  }
  &:hover h3 {
    letter-spacing: 1px;
  }
  &:active h3 {
    transition: 0.1s;
    letter-spacing: 2px;
  }
`;

export const TextReg = styled.h3`
  color: #16093a;
  transition: 0.5s;
  pointer-events: none;
`;
