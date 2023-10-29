type TSignIn = {
  id: string;
  password: string;
};

type TSignUp = TSignIn & {
  email: string;
  username: string;
};
