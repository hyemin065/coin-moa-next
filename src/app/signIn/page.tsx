'use client';

import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

const SignInMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignInWrap = styled.div`
  width: 400px;
`;

type TInput = {
  id: string;
  password: string;
};

const SignIn = () => {
  const [inputData, setInputData] = useState<TInput>({ id: '', password: '' });
  const [ErrorMessage, setErrorMessage] = useState({ idError: '', passwordError: '', loginError: '' });

  const changeInputData = (key: keyof TInput, value: string) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  const SignUpHandler = () => {
    // isValidationCheck();
  };

  return (
    <SignInMain>
      <SignInWrap>
        <Input
          id='id'
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputData('id', e.target.value)}
          placeholder='아이디를 입력하세요'
          errorMessage={ErrorMessage.idError}
        />
        <Input
          id='password'
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputData('password', e.target.value)}
          placeholder='비밀번호를 입력하세요'
          errorMessage={ErrorMessage.passwordError}
        />

        {/* 클릭시로딩처리 */}
        <Button text='Sign In' onClickHandler={SignUpHandler} />
      </SignInWrap>
    </SignInMain>
  );
};

export default SignIn;
