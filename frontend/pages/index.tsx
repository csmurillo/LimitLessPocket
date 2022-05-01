import type { NextPage } from 'next'
import styled from "styled-components"
import Link from 'next/link'

const Main: NextPage = () => {
  return (
    <MainContainer>
      <Wrap>
        <Logo>
          <h1>LimitLess Pocket</h1>
        </Logo>
        <ButtonGroup>
          <Link href="/login">
            <a>
              <Button color='blue'>Login</Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button>Signup</Button>
            </a>
          </Link>
        </ButtonGroup>
      </Wrap>
    </MainContainer>
  )
}
const Logo=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0;margin:0;
& h1{
  font-family: 'Square Peg', cursive;
  font-size:4em;
  color:blue;
}
`;
const MainContainer = styled.div`
position:relative;
width:100%; height:100%;
display:flex;
justify-content:center;
align-items:center;
`;
const Wrap = styled.div`
display:flex;
flex-direction:column;
`;
const ButtonGroup= styled.div`
display:flex;
gap:2em;
`;
const Button=styled.button`
padding-left:5em;
padding-right:5em;
padding-top:1em;
padding-bottom:1em;
background-color:white;
border:1px solid lightgray;
border-radius:10px;
cursor:pointer;
font-size:1em;
background-color:${props => props.color ? "blue" : "white"};
color:${props => props.color ? "white" : "black"};
`;


export default Main;

