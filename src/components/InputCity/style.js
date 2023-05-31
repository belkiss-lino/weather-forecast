import styled from "styled-components";
import { Colors } from '../../assets/colors/colors';

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

`
const ButtonSearch = styled.button`
    height: 45px;
    padding: 10px;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: ${Colors.blue_50};
        color: white;
    }
`



export { WrapperSearch, InputCity, ButtonSearch }