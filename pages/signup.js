import { useState } from 'react';
import { useRouter } from 'next/router';

// imports for Redux
import { connect } from 'react-redux';
import { signupAction } from '../store/actions/signupActions';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../styles';

/* Components asdc */
import CredentialsLayout from '../layouts/credentialsLayout';
import { MainButton, Title } from '../components/globals';
import Link from '../components/globals/Buttons/SimpleButton';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../components/globals/Inputs';

const SignUp = ({ signupAction }) => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const [UserEmail, setUserEmail] = useState({
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signupAction(UserEmail);
    if (response.status === 200) {
      router.push('/confirmation');
    } else {
      setLoading(false);
    }
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserEmail({ ...UserEmail, [property]: value });
  };

  return (
    <>
      <CredentialsHeader>
        <span>Don't have an account?</span>
        <Link href="/login" title="Sign In" />
      </CredentialsHeader>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <Title title="Sign up" />
          <InputWrapper>
            <LoginIcon src="/images/svgs/user.svg" alt="user icon" />
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              value={UserEmail.email}
              onChange={(e) => onChangeHandler(e, 'email')}
            />
          </InputWrapper>
        </FormBody>
        <FormFooter>
          <MainButton title="Sign up" type="submit" loading={Loading} />
        </FormFooter>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    authenticated: state.loginReducer.authenticated,
  };
};

SignUp.Layout = CredentialsLayout;

export default connect(mapStateToProps, { signupAction })(SignUp);

const CredentialsHeader = styled.div`
  ${setFlex('flex-end', 'center')};
  padding: ${setRem(20)};
  span {
    margin-right: 17px;
  }
`;

const Form = styled.form`
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
`;

const FormFooter = styled.div`
  width: 100%;
  ${setFlex('center', 'center')};
  span {
    margin-right: 17px;
  }
`;
