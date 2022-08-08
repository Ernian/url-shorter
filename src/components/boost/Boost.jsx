import styled from "styled-components";
import bgBoost from '../../assets/bg-boost-desktop.svg'
import { MainBtn } from "../ui/MainBtn";

const BoostContainer = styled.div`
box-sizing: border-box;
background-image: url(${bgBoost});
border-image-repeat: no-repeat;
min-height: 252px;
background-color: hsl(257, 27%, 26%);
padding: 60px;

    .section_title {
        margin-top: 0px;
        text-align: center;
        font-size: 2em;
        color: #fff;
    }

    button {
        display: block;
        margin: 0 auto;
    }

`

const Boost = () => {
    return (
        <BoostContainer>
            <h2 className="section_title" >Advanced Statistics</h2>
            <MainBtn>Get Started</MainBtn>
        </BoostContainer>
    )
}

export default Boost