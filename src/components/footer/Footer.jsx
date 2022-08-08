import styled from "styled-components";
import logo from '../../assets/logo.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import tweeterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'

const FooterContainer = styled.footer`
min-height: 300px;
background-color: hsl(260, 8%, 14%);
padding: 60px;
display: flex;
justify-content: space-around;

    .logo {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(353deg) brightness(106%) contrast(104%); 
    }

    .footer_section_header {
        color: #fff;
        font-size: 20px;
        margin-top: 0;

    }
    .footer_links_list {
        padding: 0;
        list-style: none;

    }

    .footer_links_list li {
        margin-top: 12px;
    }

    .footer_link {
        text-decoration: none;
        color: hsl(0, 0%, 60%);
    }

    .footer_link:hover {
        color: hsl(180, 66%, 45%);
    }

    .footer_social_icon {
        display: inline-block;
        margin-right: 20px;

    }

    .footer_social_icon {
        display: inline-block;
        margin-right: 20px;
    }

    .footer_social_icon:hover {
        cursor: pointer;
        filter: invert(54%) sepia(86%) saturate(372%) hue-rotate(131deg) brightness(98%) contrast(91%);
    }

`
const FooterList = ({ section, linkList }) => {
    const links = linkList.map((link, i) => (
        <li key={i}>
            <a href="#" className="footer_link">{link}</a>
        </li>
    ))
    return (
        <div>
            <h5 className="footer_section_header">{section}</h5>
            <ul className="footer_links_list">{links}</ul>
        </div>
    )
}

const SocialIcons = () => {
    return (
        <div>
            <img src={facebookIcon} alt="social icon" className="footer_social_icon" />
            <img src={tweeterIcon} alt="social icon" className="footer_social_icon" />
            <img src={pinterestIcon} alt="social icon" className="footer_social_icon" />
            <img src={instagramIcon} alt="social icon" className="footer_social_icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <FooterList
                section="Features"
                linkList={['Link Shortering', 'Branded links', 'Analytics']}
            />
            <FooterList
                section="Resources"
                linkList={['Blog', 'Developers', 'Support']}
            />
            <FooterList
                section="Company"
                linkList={['About', 'Our team', 'Careers', 'Contact']}
            />
            <SocialIcons />
        </FooterContainer>
    )
}

export default Footer