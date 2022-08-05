import styled from "styled-components"
import Nav from "../nav/Nav"
import workImg from '../../assets/illustration-working.svg'

const HeaderContainer = styled.header`
display: flex;
justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
padding: 20px;
font-family: Arial, Helvetica, sans-serif;


    .section_header {
        flex-basis: 50%;
        flex-grow: 1;

        h1 {
            font-size: 4.5em;
            margin-bottom: 0;
        }

        p {
            margin-top: 0;
            font-size: 30px;
            color: hsl(0, 0%, 75%);
        }

        button {
            padding: 10px 20px;
            font-size: 30px;
            background-color: hsl(180, 66%, 45%);
            box-sizing: border-box;
            color: #fff;
            border: none;
            border-radius: 27px;
            border-color: transparent;
        }
    
        button:hover {
            cursor: pointer;
            background-color: hsl(180, 66%, 65%);
        }
    }
    .work-img {
        min-height:500px;
        flex-basis: 50%;
        flex-grow: 1;
        background-image: url(${workImg});
        background-repeat: no-repeat;
    }

`

const Header = () => {
    return (
        <HeaderContainer>
            <Nav />
            <div className="section_header">
                <h1>More than just shorter links</h1>
                <p>Build your brands's recognition and get detailed insights on how yuor links are performing.</p>
                <button>Get Started</button>
            </div>
            <div className="work-img" />
        </HeaderContainer>
    )
}

export default Header