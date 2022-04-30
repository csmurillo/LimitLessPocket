import type { NextPage } from 'next'
import styled from 'styled-components';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useForm from './useForm';
import validateForm from './validateForm';

const Signup: NextPage = () => {
  const {formValues, onHandleChange, onHandleSubmit}=useForm(validateForm);
  return (
    <Page>
      <Wrap>
        <h1>Signup</h1>
        <Form onSubmit={onHandleSubmit}>
          <InputGroup>
            <Label>
              First Name:
            </Label>
            <Input type='text' name='firstName' placeholder='John' value={formValues.firstName} onChange={onHandleChange}/>
          </InputGroup>
          <InputGroup>
            <Label>
              Last Name:
            </Label>
            <Input type='text' name='lastName' placeholder='Doe' value={formValues.lastName} onChange={onHandleChange}/>
          </InputGroup>
          <InputGroup>
            <Label>
              Email:
            </Label>
            <Input type='email' name='email' placeholder='johndoe@gmail.com' value={formValues.email} onChange={onHandleChange}/>
          </InputGroup>
          <InputGroup>
            <Label>
              Password:
            </Label>
            <Input type='password' name='password' placeholder='***********' value={formValues.password} onChange={onHandleChange}/>
          </InputGroup>
          <ButtonSubmit>
            <button>Sign Up</button>
          </ButtonSubmit>
        </Form>
      </Wrap>
    </Page>
  );
}
const Page=styled.div`
position:relative;
width:100%;
display:flex;
justify-content:center;
padding-top:180px;`;
const Wrap =styled.div`
  & h1{
    font-size:3em;
    font-family: 'Dosis', sans-serif;
  }
`;
const Form = styled.form``;
const InputGroup=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:1em;
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
export default Signup;