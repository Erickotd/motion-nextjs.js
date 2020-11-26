import styled from 'styled-components';
import { setRem } from '../../styles';

export const AuthInput = styled.input`
  height: 35px;
  font-family: Roboto, sans-serif;
  color: ${({ theme }) => theme.setColor.mainBlack};
  font-size: ${setRem(15.5)};
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

export const LoginIcon = styled.img`
  margin: 0 ${setRem(20)} 0 ${setRem(5)};
`;

export const InputWrapper = styled.div`
  width: ${setRem(340)};
  height: ${setRem(58)};
  border-bottom: solid rgba(149, 149, 149, 0.21) ${setRem(2)};
  margin-bottom: ${setRem(20)};
  display: flex;
`;
