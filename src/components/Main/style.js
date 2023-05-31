import styled from "styled-components";
import { Colors } from '../../assets/colors/colors';

const Title = styled.div`
    padding: 10px;
    border: 1px solid ${Colors.blue_25};
    border-radius: 8px;
    box-shadow: 5px 5px 5px ${Colors.blue_75};
`

const WrapperSearch = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const InputCity = styled.input`
    margin: 35px 0;
    height: 45px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;

    font-size: 1rem;

`
const ButtonSearch = styled.button`
    height: 45px;
    width: 50px;
    padding: 10px;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: ${Colors.gray};
        color: white;
    }
`

const WrapperForecast = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;
    padding: 20px;
    border: 1px solid ${Colors.blue_25};
    border-radius: 8px;

    div:first-of-type {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        font-size: 2rem;
        gap: 20px;
    }

    div:nth-of-type(2){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.2rem;

        gap: 10px;
    }
`
const WrapperInfo = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 10px;

    font-size: 1.3rem;
    color: ${Colors.blue_50};
    border-radius: 8px;
    background-color: #FFFc;
`


export { Title, WrapperSearch, InputCity, ButtonSearch, WrapperForecast, WrapperInfo }