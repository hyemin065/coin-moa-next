type validationType = 'id' | 'password' | 'nickName' | 'email';

export const isValidationCheck = (type: validationType, value: string) => {

  if(type === 'id'){
    if(value.trim().length >= 6){
      return ''
    }
  }
};
