import React, { FC } from 'react';

import styled from 'styled-components';
import useForm from './useForm';
import validateForm from './validateForm';

const LoginComponent:FC = ()=>{

    const { formValues, errors, onHandleChange, onHandleSubmit }=useForm(validateForm);

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={onHandleSubmit}>
            <Email>
                <label>
                Email:
                </label>
                <input name='email' type='email' value={formValues.email} onChange={onHandleChange} placeholder='johndoe@email.com'/>
            </Email>
            <EmailError>
                <p>{errors.emailError}</p>
            </EmailError>
            <Password>
                <label>
                Password:
                </label>
                <input name="password" type='password' value={formValues.password} onChange={onHandleChange} placeholder='***********'/>
            </Password>
            <PasswordError>
                <p>{errors.passwordError}</p>
            </PasswordError>
            <ButtonSubmit>
                <button type='submit'>Login</button>
            </ButtonSubmit>
            </Form>
        </>
    );
};

const Form = styled.form``;
const Email=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:1em;
& label{
  font-family: 'Dosis', sans-serif;
  font-size:1.5em;
}
& input{
  flex:1;
  border:none;
  border-bottom:1px solid black;
}
`;
const Password=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:2em;
& label{
  font-family: 'Dosis', sans-serif;
  font-size:1.5em;
}
& input{
  flex:1;
  border:none;
  border-bottom:1px solid black;
}
`;
const EmailError=styled.div`
`;
const PasswordError=styled.div`
`;
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

export default LoginComponent;