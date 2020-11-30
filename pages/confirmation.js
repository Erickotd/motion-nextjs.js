import React from 'react';
import { useRouter } from 'next/router';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../styles';

/* Components */
import CredentialsLayout from '../layouts/credentialsLayout';
import { MainButton, Title } from '../components/globals';

const Confirmation = () => {
  const router = useRouter();

  return (
    <>
      <CredentialsHeader />
      <Congratulations>
        <FormBody>
          <Title title="Congratulations" />
          <img src="/images/checked.png" alt="checked icon" />
          <p>We've have send a confirmation code to your email</p>
          <span>{router.query.data}</span>;
        </FormBody>
        <FormFooter>
          <MainButton
            title="countinue"
            type="button"
            onClick={() => {
              router.push({
                pathname: '/verification',
                query: { data: router.query.data },
              });
            }}
          />
        </FormFooter>
      </Congratulations>
    </>
  );
};

Confirmation.Layout = CredentialsLayout;

export default Confirmation;

const CredentialsHeader = styled.div`
  ${setFlex('flex-end', 'center')};
  padding: ${setRem(20)};
  span {
    margin-right: 17px;
  }
`;

const Congratulations = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    padding-bottom: ${setRem(20)};
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: ${setRem(200)};
    padding-bottom: ${setRem(40)};
  }
  p {
    opacity: 0.6;
    font-size: ${setRem(18)};
    line-height: ${setRem(24)};
  }
`;

const FormFooter = styled.div`
  width: 100%;
  ${setFlex('center', 'center')};
  span {
    margin-right: 17px;
  }
`;
