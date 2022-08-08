import styled from "styled-components";
import Icon from "../icon/Icon";

const CartContainer = styled.div`
position: relative;
padding: 50px 30px;
background-color: #fff;
flex: 0 1 300px;
border-radius: 10px;

    p {
        color: hsl(0, 0%, 60%);
    }


`
const Card = ({ title, text, icon }) => {
    return (
        <CartContainer>
            <Icon src={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
        </CartContainer>
    )
}

export default Card