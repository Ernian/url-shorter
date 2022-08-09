import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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

    div {
        position: relative;
    }

    .error {
        position: absolute;
        top: 60px;
        left: 5px;
        color: hsl(0, 87%, 67%);
    }
}

.link_input,
.shorter_btn {
    display: inline-flex;
}

.short_link_container {
    display: flex;
    justify-content: space-between;
    max-width: 1110px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 20px;
    margin: 20px auto 0;
    box-sizing: border-box;

    a {
        display: block;
        text-decoration: none;
        color: hsl(180, 66%, 45%);
        line-height: 43px;
        
        &:hover {
            color: hsl(180, 66%, 35%);
        }
    }

    input {
        display: inline-block;
        margin-left: auto;
        padding: 10px 20px;
        font-size: 18px;
        background-color: hsl(180, 66%, 45%);
        box-sizing: border-box;
        color: #fff;
        border: none;
        border-radius: 10px;
        border-color: transparent;

        &:hover {
            cursor: pointer;
            background-color: hsl(180, 66%, 65%);
        }
    }

    .copied {
        background-color: hsl(257, 27%, 26%);
        &:hover {
            background-color: hsl(257, 27%, 26%);
        }
    }
}
`

const FormBtn = styled(MainBtn)`
border-radius: 10px;
`

const Shorten = () => {

    const [longUrl, setLongUrl] = useState('')
    const [shortLinks, setShortLinks] = useState([])
    const [error, setError] = useState(' ')

    function changeUrl(event) {
        setLongUrl(event.target.value.trim())
        setError(' ')
    }

    function getShortUrl(event) {
        event.preventDefault()
        if (longUrl) {
            axios.get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
                .then(response => {
                    const { full_short_link,
                        full_short_link2,
                        full_short_link3 } = response.data.result
                    setShortLinks([full_short_link, full_short_link2, full_short_link3])
                })
                .catch(error => {
                    setError('Не удалось преобразовать ссылку')
                    console.log(`${error.name}: ${error.message}`)
                })
        } else {
            setError('Пожалуйста, введите ссылку')
        }
        setLongUrl('')
        setShortLinks([])
    }

    function renderShortLinks() {
        if (!shortLinks.length) return null
        return shortLinks.map(link => (
            <div className="short_link_container" key={link}>
                <a href={link} target="_blank">{link}</a>
                <input type="button" value="Copy" onClick={copyUrl} data-url={link} />
            </div>
        ))
    }

    function copyUrl(event) {
        const btn = event.target
        navigator.clipboard.writeText(btn.dataset.url)
            .then(() => {
                btn.value = 'Copied!'
                btn.classList.add('copied')
            })
            .catch(error => {
                setError('Не удалось скопировать ссылку')
                console.log(`${error.name}: ${error.message}`)
            })

    }

    return (
        <ShortenContainer>
            <form className="shorter">
                <div>
                    <LinkInput
                        className="input"
                        placeholder="Shorten a link here..."
                        value={longUrl}
                        onChange={changeUrl}
                    />
                    <div className="error">{error}</div>
                </div>
                <FormBtn onClick={getShortUrl} type="submit">Shorten It!</FormBtn>
            </form>
            {renderShortLinks()}
        </ShortenContainer>
    )
}

export default Shorten