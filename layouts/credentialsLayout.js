/* Styled Components */
import styled from 'styled-components';
import { media } from '../styles';

/* Components */
import Hero from '../components/globals/Hero';

const CredentialsLayout = ({ children }) => {
  return (
    <CredentialsWrapper>
      <Hero img={'/images/background_image.png'} />
      <RightContainer>{children}</RightContainer>
    </CredentialsWrapper>
  );
};

export default CredentialsLayout;

const CredentialsWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

const RightContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${media.tablet`
      width: 60%;
  `};
`;
