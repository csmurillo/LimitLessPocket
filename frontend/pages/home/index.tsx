import type { NextPage } from 'next'
import styled from 'styled-components';

const Home: NextPage = ()=>{
    return (
        <HomeContainer>Home</HomeContainer>
    );
};

const HomeContainer=styled.div`
font-size:8em;
`;

export default Home;