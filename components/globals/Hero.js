import styled from 'styled-components';
import { setHeroBackground } from '../../styles';
import { media } from '../../styles';

const Hero = styled.section`
  width: 40%;
  display: none;
  ${media.tablet`
      display: initial;
  `};
  ${(props) => setHeroBackground({ img: props.img })};
`;

export default Hero;
