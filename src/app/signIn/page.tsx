'use client';

import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { isValidationCheck } from '@/utils';
import { useRouter } from 'next/navigation';
import SignWrap from '@/components/SignWrap/SignWrap';

const ErrorMessage = styled.span``;

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  color: #fff;
`;

const SignIn = () => {
  const [inputData, setInputData] = useState<TSignIn>({ id: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const changeInputData = (key: keyof TSignIn, value: string) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  const a = async (data: any) => {
    try {
      const res = await fetch(`/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        router.push('/');
      }
      console.log(res);

      return res;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  const SignInHandler = async (data: TSignIn) => {
    console.log(data);
    //로그인 api
    const res = await a(data);
    setIsLoading(true);

    if (res) {
      setIsLoading(false);
      router.push('/', { scroll: false });
    } else {
      setIsLoading(false);
      setErrorMessage('아이디 또는 비밀번호를 잘못 입력했습니다');
    }
  };

  return (
    <>
      <SignWrap>
        <Input
          id='id'
          value={inputData.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputData('id', e.target.value)}
          placeholder='아이디를 입력하세요'
        />
        <Input
          id='password'
          type='password'
          value={inputData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputData('password', e.target.value)}
          placeholder='비밀번호를 입력하세요'
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {/* 클릭시로딩처리 */}
        <Button text='Sign In' onClickHandler={() => SignInHandler(inputData)} />
      </SignWrap>
      {isLoading && <Loading>loading...</Loading>}
    </>
  );
};

export default SignIn;
