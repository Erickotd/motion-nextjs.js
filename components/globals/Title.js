import React from 'react';
import styled from 'styled-components';
import { setRem } from '../../styles';

const Title = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};

export default styled(Title)`
  font-size: ${setRem(40)};
  text-transform: capitalize;
  ${({ theme }) => theme.setFontWeight.normal};
  ${({ theme }) => theme.setFont.main};
  color: ${({ theme }) => theme.setColor.mainBlack};
`;
