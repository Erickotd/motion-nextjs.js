import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';
import { setRem } from '../../../styles';

const MainButton = ({ className, title, loading = false, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {loading ? <FaSpinner /> : title}
    </button>
  );
};

export default styled(MainButton)`
  width: ${setRem(280)};
  height: ${setRem(60)};
  ${({ theme }) => theme.setRadius.round};
  ${({ theme }) => theme.setShadow.light};
  text-transform: uppercase;
  ${({ theme }) => theme.setBackground.main}
  color: ${({ theme }) => theme.setColor.mainWhite};
  font-size: ${setRem(14)};
  border: none;
  ${({ theme }) => theme.setFont.main};
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    ${({ theme }) => theme.setBackground.hover}
  }
  text-decoration: none;
  cursor: pointer;
`;
