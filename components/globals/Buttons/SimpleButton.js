import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { setRem } from '../../../styles';

const SimpleButton = ({ className, title, link }) => {
  return (
    <div></div>
    // <Link className={className} to={link}>
    //   {title}
    // </Link>
  );
};

export default styled(SimpleButton)`
  padding: ${setRem(10)} ${setRem(27)};
  ${({ theme }) => theme.setRadius.round};
  font-size: ${setRem(12)};
  ${({ theme }) => theme.setFont.main};
  ${({ theme }) => theme.setShadow.light};
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.setColor.mainBlack};
  background: ${({ theme }) => theme.setColor.mainWhite};
  opacity: 0.5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  &:hover {
    background: ${({ theme }) => theme.setColor.mainBlack};
    color: ${({ theme }) => theme.setColor.mainWhite};
    opacity: 1;
  }
`;
