import styled from "styled-components";
import Shorten from "../shorter/Shorter";
import Card from "../card/Card";
import iconRecognition from '../../assets/icon-brand-recognition.svg'
import iconRecords from '../../assets/icon-detailed-records.svg'
import iconCustomizable from '../../assets/icon-fully-customizable.svg'

const Statistic = styled.section`
padding: 20px;
background-color: hsl(0, 0%, 95%);
position: relative;
box-sizing: border-box;

    .section_title {
        margin-top: 70px;
        text-align: center;
        font-size: 2em;
    }

    .section_text {
        text-align: center;
        color: hsl(0, 0%, 60%);
        width: 500px;
        font-size: 1.1em;
        margin: 0 auto;
    }

    .cards_wrapper {
        display: flex;
        justify-content: space-around;
        margin: 100px 0;
        min-height: 400px;

        div:nth-child(1){
            align-self: flex-start;
        }

        div:nth-child(2){
            align-self: center;
        }

        div:nth-child(3){
            align-self: flex-end;
        }
    }

`
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vitae beatae? Eaque a doloremque saepe omnis sunt expedita, repellendus ex!'

const StatisticSection = () => {
    return (
        <Statistic>
            <Shorten />
            <h2 className="section_title" >Advanced Statistics</h2>
            <p className="section_text" >Track how your links are performing across the web with our advanced statistics dashboard.lorem</p>
            <div className="cards_wrapper">
                <Card
                    title={'Brand Recognition'}
                    text={lorem}
                    icon={iconRecognition}
                />
                <Card
                    title={'Detailed Records'}
                    text={lorem}
                    icon={iconRecords}
                />
                <Card
                    title={'Fully Customizable'}
                    text={lorem}
                    icon={iconCustomizable}
                />
            </div>

        </Statistic>
    )
}

export default StatisticSection