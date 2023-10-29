import styled from 'styled-components';

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

const SignWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignInMain>
      <SignInWrap>{children}</SignInWrap>
    </SignInMain>
  );
};

export default SignWrap;
