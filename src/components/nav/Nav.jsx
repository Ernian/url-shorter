import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
box-sizing: border-box;
width: 100%;
margin: 10px 0 30px;
font-family: Arial, Helvetica, sans-serif;

    .left_nav, 
    .right_nav {
        display: flex;
        align-items: center;
    }

    .right_nav {
        justify-content: end;
    }

    img {
        margin-right: 20px;
    }

    a {
        display: inline-block;
        margin-left: 10px;
        padding: 10px;
        text-decoration: none;
        color: hsl(0, 0%, 75%);
    }

    a:hover {
        color: hsl(255, 11%, 22%);
    }

    button {
        padding: 10px;
        margin-left: 10px;
        font-size: 18px;
        background-color: transparent;
        box-sizing: border-box;
        color: hsl(0, 0%, 75%);
        border: none;
        border-radius: 20px;
        border-color: transparent;
    }

    button:hover {
        cursor: pointer;
        color: #fff;
        background-color: hsl(180, 66%, 49%);
    }

`

const Nav = () => {
    return (
        <NavBar>
            <div className='left_nav'>
                <img src={logo} alt="logo" />
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>
            <div className='right_nav'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </NavBar>
    )
}

export default Nav