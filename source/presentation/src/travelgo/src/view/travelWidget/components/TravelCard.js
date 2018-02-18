//@flow
import React from 'react'
import styled from 'styled-components'
import TravelImage from './TravelImage'
import { getResource } from '../../../lib/resource-utility/utils'
import { SMALL_SIZE, type SizeTravelWidget } from '../constants'

type Props = {|
    id:number,
    destination:string,
    departureDate:?number,
    returnDate:?number,
    note:string,
    cardSize?:SizeTravelWidget,
    imageSrc:string
|};

const SMALL_WIDTH = 25;
const MEDIUM_WIDTH = 35;

export const getWidth = (size?:SizeTravelWidget) =>{
    if(size)
        return size === SMALL_SIZE ? SMALL_WIDTH : MEDIUM_WIDTH;
    else
        return SMALL_WIDTH;
}

const Container = styled.div`
    display:block;
    width: ${(props:Props) => getWidth(props.cardSize) + 'em'};
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 3px;
`
const Title = styled.div``
const Header = styled.div``
const Body = styled.div``
const Text = styled.div``


const TravelCard = (props:Props) => {
    return( 
        <Container className='travelCardDivContainer'>
            <Header>
               <TravelImage imageSize={props.cardSize} src={getResource(props.imageSrc)} />
            </Header>
            <Body>
                <Title>{props.destination} </Title>
                <Text> {props.note}</Text>
                <Text> {props.departureDate}</Text>
                <Text> {props.returnDate}</Text>
            </Body>
        </Container>
    )
};

export default TravelCard;