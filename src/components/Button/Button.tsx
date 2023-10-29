'use client';

import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f4a53c;
  font-size: 16px;
`;

type Props = {
  text: string;
  onClickHandler: () => void;
};

const Button = ({ text, onClickHandler }: Props) => {
  return (
    <StyledButton type='button' onClick={onClickHandler}>
      {text}
    </StyledButton>
  );
};

export default Button;
