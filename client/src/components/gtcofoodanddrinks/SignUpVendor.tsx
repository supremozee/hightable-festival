import React from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 451px;
  transition: 2s ease-in;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
//   @media only screen and (max-width: 390px) {
//     width: 100%; 
//     margin-top: 40px;
//     height: auto;
//   }
`;

const Logo = styled.img`
  width: 150px; 
  height: 150px;
  margin-bottom: 10px;
`;

const SignUpForm = styled.form`
  width: 100%;
  max-width: 400px; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  & label {
    font-size: 12px;
    font-family: Monteserrat;
  }
`;

const Input = styled.input`
  width: 290px;
  height: 25px;
//   padding: 10px;
  border-radius: 25px;
  border: none;
  padding-left: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  &::placeholder {
    font-size: 10px;
    color:#002033;
    font-family: Monteserrat;
    padding-left: 10px;
  }
`;

const Button = styled.button`
  width: 290px;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: #FF9916; 
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

const SignUpPage = () => {
  return (
    <PageWrapper>
      <Logo src="/images/highlogo.svg" alt="Logo" />
      <SignUpForm>
        <label htmlFor="fullname">Full Name</label>
        <Input type="text" id="fullname"placeholder='Input Your Full Name' />
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" placeholder='Input Your Email' />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" placeholder='Input Your Password'  />
        <div>
        <Button type="submit">Sign Up</Button>
        <GoogleButton>
          <FaGoogle /> Sign Up with Google
        </GoogleButton>
        </div>
      </SignUpForm>
    </PageWrapper>
  );
}

export default SignUpPage;
