'use client';

import { useState, ChangeEvent } from 'react';
import { isValidationCheck } from '@/utils';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import styled from 'styled-components';

const SignUpMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpWrap = styled.div`
  width: 400px;
`;

type TInput = {
  id: string;
  password: string;
  passwordConfirm: string;
};

const SignUp = () => {
  const [inputData, setInputData] = useState({ id: '', password: '', passwordConfirm: '' });
  const [errorBool, setErrorBool] = useState({ id: false, password: false, passwordConfirmError: false });
  const [ErrorMessage, setErrorMessage] = useState({ idError: '', passwordError: '', loginError: '' });

  const changeInputData = (key: keyof TInput, value: string) => {
    console.log(typeof value);
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  const SignUpHandler = () => {
    isValidationCheck();
  };

  return (
    <SignUpMain>
      <SignUpWrap>
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
        <Input
          id='passwordConfirm'
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputData('passwordConfirm', e.target.value)}
          placeholder='비밀번호를 입력하세요'
          errorMessage={ErrorMessage.passwordError}
        />

        {/* 클릭시로딩처리 */}
        <Button text='Sign Up' onClickHandler={SignUpHandler} />
      </SignUpWrap>
    </SignUpMain>
  );
};

export default SignUp;
