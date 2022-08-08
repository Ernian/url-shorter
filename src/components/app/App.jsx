import styled from "styled-components";
import Header from "../header/Header";
import StatisticSection from "../statistics/StatisticSection";
import Boost from "../boost/Boost";
import Footer from "../footer/Footer";


const AppContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
margin: 20px auto 0;
padding: 30px;
max-width: 1440px;
font-size: 18px;
box-sizing: border-box;

`

function App() {
    return (
        <AppContainer>
            <Header />
            <StatisticSection />
            <Boost />
            <Footer />
        </AppContainer>
    );
}

export default App;
