import type { NextPage } from 'next'
import styled from 'styled-components';
import SignupComponent from '../../components/signup';

const Signup: NextPage = () => {
  return (
    <Page>
      <Wrap>
        <SignupComponent/>
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

export default Signup;