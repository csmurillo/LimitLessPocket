import React, { FC } from 'react';
import styled from 'styled-components';
import useForm from './useForm';
import validateForm from './validateForm';

const SignupComponent: FC = () => {

    const { formValues, errors, onHandleChange, onHandleSubmit }=useForm(validateForm);
    
    return (
    <>
        <h1>Signup</h1>
        <Form onSubmit={onHandleSubmit}>
          <InputGroup>
            <Label>
              First Name:
            </Label>
            <Input type='text' name='firstName' placeholder='John' value={formValues.firstName} onChange={onHandleChange}/>
          </InputGroup>
          <InputError>
            <p>{errors.firstNameError}</p>
          </InputError>
          <InputGroup>
            <Label>
              Last Name:
            </Label>
            <Input type='text' name='lastName' placeholder='Doe' value={formValues.lastName} onChange={onHandleChange}/>
          </InputGroup>
          <InputError>
            <p>{errors.lastNameError}</p>
          </InputError>
          <InputGroup>
            <Label>
              Email:
            </Label>
            <Input type='email' name='email' placeholder='johndoe@gmail.com' value={formValues.email} onChange={onHandleChange}/>
          </InputGroup>
          <InputError>
              <p>{errors.emailError}</p>
          </InputError>
          <InputGroup>
            <Label>
              Password:
            </Label>
            <Input type='password' name='password' placeholder='***********' value={formValues.password} onChange={onHandleChange}/>
          </InputGroup>
          <InputError>
              <p>{errors.passwordError}</p>
          </InputError>
          <ButtonSubmit>
            <button>Sign Up</button>
          </ButtonSubmit>
        </Form>
    </>
  );
}
const Form = styled.form``;
const InputGroup=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:1em;
`;
const InputError = styled.div`
`;
const Label =styled.label`
font-family: 'Dosis', sans-serif;
  font-size:1.5em;
`;
const Input =styled.input`
flex:1;
  border:none;
  border-bottom:1px solid black;`;
const ButtonSubmit=styled.div`
display:flex;
justify-content:center;
& button{
  padding:10px 40px;
  font-family: 'Dosis', sans-serif;
  font-size:1.5em;
  color:white;
  background-color:blue;
  border:1px solid transparent;
  border-radius:5px;
}
`;

export default SignupComponent;
