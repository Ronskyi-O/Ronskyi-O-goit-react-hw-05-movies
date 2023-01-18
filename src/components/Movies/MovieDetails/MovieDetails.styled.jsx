import styled from "styled-components";
import { Link } from 'react-router-dom'


export const MovieContainer = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 30px;
    padding-left: 60px;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ButtonGoBack = styled.button`
    width: 100px;
    height: 30px;
`

export const DetailsContainer = styled.div`
    padding-top: 80px;
`

export const AdditionalInfoContainer = styled.div`
    padding-left: 60px;
`

export const AdditionalInfoList = styled.ul`
        list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const AdditionalInfoItem = styled(Link)`
        text-decoration: none;
    color: black;
    height: 100%;
    cursor: pointer;

    :hover,
    :focus {
        color:  #725757;
    }
`
