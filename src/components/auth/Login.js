import React from 'react';
import styled from 'styled-components';
import LeftImage from '../../assets/undraw_authentication_re_svpt 1.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-left:100px;
   padding-right:100px;
  @media (max-width: 768px) {
    padding: 0 10px; 
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 20px;
  display: block;
  
  @media (max-width: 1100px) {
    display: none; 
  }

`;

const RightSide = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 600px;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckBoxLabel = styled.label`
  margin-left: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
`;

const ResetPasswordLink = styled.p`
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
`;

const Heading = styled.h3`
  margin-bottom: 10px;
`;

const Login = () => {
    return (
        <Container>
            <LeftSide>
                <img className="image"src={LeftImage} alt="Login" />
            </LeftSide>
            <RightSide>
                <h2 style={{ textAlign: "center", marginTop: "100px" }}>Login</h2>
                <form>
                    <Heading>Email or Phone</Heading>
                    <Input type="text" placeholder="Enter your email or phone" />
                    <Heading>Password</Heading>
                    <Input type="password" placeholder="Enter your password" />
                    <ResetPasswordLink style={{ color: '#ff6600' }}>Forgot your password? Reset it here.</ResetPasswordLink>
                    <CheckBoxContainer>
                        <input type="checkbox" id="rememberMe" />
                        <CheckBoxLabel htmlFor="rememberMe">Remember me</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <input type="checkbox" id="termsAndConditions" />
                        <CheckBoxLabel htmlFor="termsAndConditions">Agree to Terms and Conditions</CheckBoxLabel>
                    </CheckBoxContainer>
                    <Button type="submit">Login</Button>
                </form>
                <RegisterLink style={{ color: '#ff6600' }}>Don't have an account? Register me</RegisterLink>
            </RightSide>
        </Container>
    );
};

export default Login;
