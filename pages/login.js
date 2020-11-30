import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoIosInformationCircleOutline } from 'react-icons/io';

/* imports for Redux */
import { connect } from 'react-redux';
import { loginAction } from '../store/actions/loginActions';
import { alertAction } from '../store/actions/alertAction';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../styles';

/* Components */
import CredentialsLayout from '../layouts/credentialsLayout';
import { MainButton, Title } from '../components/globals/';
import Link from '../components/globals/Buttons/SimpleButton';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../components/globals/Inputs';

const Login = ({ alertAction, loginAction, error, alert }) => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const [UserAccesInfo, setUserAccesInfo] = useState({
    email: 'ninecab303@pidouno.com',
    password: 'cxyaq123',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await loginAction(UserAccesInfo);
    if (response.status === 200) {
      router.push('/');
    } else {
      alertAction(error);
      setLoading(false);
    }
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserAccesInfo({ ...UserAccesInfo, [property]: value });
  };

  return (
    <>
      <CredentialsHeader>
        <span>Don't have an account?</span>
        <Link href="/signup" title="Sign Up" />
      </CredentialsHeader>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <Title title="Sign in" />
          <InputWrapper>
            <LoginIcon src="/images/svgs/user.svg" alt="user icon" />
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              value={UserAccesInfo.email}
              onChange={(e) => onChangeHandler(e, 'email')}
            />
          </InputWrapper>
          <InputWrapper>
            <LoginIcon src="/images/svgs/lock.svg" alt="lock icon" />
            <AuthInput
              type="password"
              placeholder="Password"
              name="password"
              value={UserAccesInfo.password}
              onChange={(e) => onChangeHandler(e, 'password')}
            />
          </InputWrapper>
          {alert.show && (
            <Error>
              <span>
                <IoIosInformationCircleOutline size="20px" />
              </span>
              {error}
            </Error>
          )}
        </FormBody>
        <FormFooter>
          <MainButton title="Sign in" type="submit" loading={Loading} />
        </FormFooter>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    authenticated: state.loginReducer.authenticated,
    alert: state.alertReducer,
  };
};

Login.Layout = CredentialsLayout;

export default connect(mapStateToProps, { alertAction, loginAction })(Login);

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

const Error = styled.div`
  position: absolute;
  top: 550px;
  color: red;
  span {
    position: absolute;
    top: -2px;
    left: -25px;
  }
`;
