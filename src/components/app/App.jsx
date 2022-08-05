import styled from "styled-components";
import Header from "../header/Header";

const AppContainer = styled.div`
margin: 20px auto 0;
max-width: 1440px;
font-size: 18px;
box-sizing: border-box;

`

function App() {
    return (
        <AppContainer>
            <Header />
        </AppContainer>
    );
}

export default App;
