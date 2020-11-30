import React, { useState } from 'react';
import { useRouter } from 'next/router';

// imports for Redux
import { connect } from 'react-redux';
import { verificationAction } from '../store/actions/signupActions';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../styles';

/* Components */
import CredentialsLayout from '../layouts/credentialsLayout';
import { MainButton, Title } from '../components/globals';
import { AuthInput, InputWrapper } from '../components/globals/Inputs';

const Verification = ({ verificationAction }) => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const [UserInfo, setUserInfo] = useState({
    code: '',
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    password_repeat: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await verificationAction(UserInfo);
    if (response.status === 200) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserInfo({ ...UserInfo, [property]: value });
  };

  return (
    <>
      <CredentialsHeader></CredentialsHeader>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <Title title="verification" />
          <InputWrapper>
            <AuthInput
              type="number"
              placeholder="Validation code"
              name="code"
              value={UserInfo.code}
              onChange={(e) => onChangeHandler(e, 'code')}
            />
          </InputWrapper>
          <div className="container">
            <InputWrapper>
              <AuthInput
                type="email"
                placeholder="Email"
                name="email"
                value={router.query.data}
                onChange={(e) => onChangeHandler(e, 'email')}
              />
            </InputWrapper>
            <InputWrapper>
              <AuthInput
                type="text"
                placeholder="Username"
                name="username"
                value={UserInfo.username}
                onChange={(e) => onChangeHandler(e, 'username')}
              />
            </InputWrapper>
          </div>
          <div className="container">
            <InputWrapper>
              <AuthInput
                type="text"
                placeholder="Firstname"
                name="first_name"
                value={UserInfo.first_name}
                onChange={(e) => onChangeHandler(e, 'first_name')}
              />
            </InputWrapper>
            <InputWrapper>
              <AuthInput
                type="text"
                placeholder="Lastname"
                name="last_name"
                value={UserInfo.last_name}
                onChange={(e) => onChangeHandler(e, 'last_name')}
              />
            </InputWrapper>
          </div>
          <div className="container">
            <InputWrapper>
              <AuthInput
                type="password"
                placeholder="Password"
                name="password"
                value={UserInfo.password}
                onChange={(e) => onChangeHandler(e, 'password')}
              />
            </InputWrapper>
            <InputWrapper>
              <AuthInput
                type="password"
                placeholder="Password repeat"
                name="password_repeat"
                value={UserInfo.password_repeat}
                onChange={(e) => onChangeHandler(e, 'password_repeat')}
              />
            </InputWrapper>
          </div>
        </FormBody>
        <FormFooter>
          <MainButton title="complete" type="submit" loading={Loading} />
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

Verification.Layout = CredentialsLayout;

export default connect(mapStateToProps, { verificationAction })(Verification);

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const FormFooter = styled.div`
  width: 100%;
  ${setFlex('center', 'center')};
  span {
    margin-right: 17px;
  }
`;
