import type { NextPage } from 'next'
import styled from 'styled-components';
import RouteGuard from '../../components/RouteGuard';

const Home: NextPage = ()=>{
    return (
        // <RouteGuard>
            <HomeContainer>Home</HomeContainer>
        // </RouteGuard>
    );
};

const HomeContainer=styled.div`
font-size:8em;
`;

export default Home;