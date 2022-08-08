import styled from 'styled-components'

const IconSvg = styled.div`
position: absolute;
top: -18%;
left: 25px;
width: 90px;
height: 90px;
border-radius: 50%;
background-color: hsl(257, 27%, 26%);
background-position: center;
background-repeat: no-repeat;
`

const Icon = ({ src }) => {
    return (
        <IconSvg style={{ backgroundImage: `url(${src})` }} />
    )
}

export default Icon