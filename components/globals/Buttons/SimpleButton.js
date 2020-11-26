import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { setRem } from '../../../styles';

const StyledLink = styled.a`
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

export default ({ href, title }) => (
  <Link href={href} passHref>
    <StyledLink>{title}</StyledLink>
  </Link>
);
