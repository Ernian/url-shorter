import styled from "styled-components";
import bgShorten from '../../assets/bg-shorten-desktop.svg'
import { MainBtn } from "../ui/MainBtn";
import { LinkInput } from "../ui/LinkInput";

const ShortenContainer = styled.div`
.shorter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgShorten});
    border-image-repeat: no-repeat;
    margin: -104px auto 0;
    max-width: 1110px;
    min-height: 168px;
    padding: 30px;
    background-color: hsl(257, 27%, 26%);
    border-radius: 20px;
    box-sizing: border-box;
}

    .link_input,
    .shorter_btn {
        display: inline-flex;
    }

`

const Shorten = () => {
    return (
        <ShortenContainer>
            <div className="shorter">
                <LinkInput placeholder="Shorten a link here..." />
                <MainBtn >Shorten It!</MainBtn>
            </div>
        </ShortenContainer>
    )
}

export default Shorten