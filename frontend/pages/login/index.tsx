import type { NextPage } from 'next'
import styled from 'styled-components';
import LoginComponent from '../../components/login';
const Login: NextPage = () => {
  return (
    <Page>
      <Wrap>
        <LoginComponent></LoginComponent>
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

export default Login;