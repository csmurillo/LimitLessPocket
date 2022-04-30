import type { NextPage } from 'next'
import styled from 'styled-components';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <Page>
      <Wrap>
        <h1>Login</h1>
        <Form>
          <Email>
            <label>
              Email:
            </label>
            <input type='email' placeholder='johndoe@email.com'/>
          </Email>
          <Password>
            <label>
              Password:
            </label>
            <input type='password' placeholder='***********'/>
          </Password>
          <ButtonSubmit>
            <button type='submit'>Login</button>
          </ButtonSubmit>
        </Form>
      </Wrap>
    </Page>
  );
}
const Page = styled.div`
position:relative;
width:100%;
display:flex;
justify-content:center;
padding-top:200px;
`;
const Wrap =styled.div`
  & h1{
    font-size:3em;
    font-family: 'Dosis', sans-serif;
  }
`;
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

export default Login;