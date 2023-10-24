'use client';

import { ChangeEvent } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #eff1ff;
  font-size: 14px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border-bottom: 1px solid rgba(239, 241, 255, 0.3);
  padding: 10px 0;
  height: 50px;
  background: transparent;
  color: #fff;
`;

const ErrorMessage = styled.span``;

type Props = {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage: string;
};

const Input = ({ id, onChange, placeholder, errorMessage }: Props) => {
  return (
    <FormGroup>
      <Label htmlFor={id}>{id}</Label>
      <InputWrap>
        <StyledInput type='text' id={id} placeholder={placeholder} onChange={onChange} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputWrap>
    </FormGroup>
  );
};

export default Input;
