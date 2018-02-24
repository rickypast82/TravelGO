//@flow
import React from 'react'
import styled from 'styled-components'
import TravelImage from './TravelImage'
import { getResource } from '../../../lib/resource-utility/utils'
import { SMALL_SIZE, type SizeTravelWidget } from '../constants'

type Props = {|
    id:number,
    destination:string,
    departureDate?:number,
    returnDate?:number,
    note:string,
    cardSize?:SizeTravelWidget,
    imageSrc:string
|};

const SMALL_WIDTH = 25;
const MEDIUM_WIDTH = 35;
const SMALL_BODY_WIDTH = 20;
const MEDIUM_BODY_WIDTH = 29;

export const getWidth = (size?:SizeTravelWidget) =>{
    if(size)
        return size === SMALL_SIZE ? SMALL_WIDTH : MEDIUM_WIDTH;
    else
        return SMALL_WIDTH;
}

export const getWidthBody = (size?:SizeTravelWidget) =>{
    if(size)
        return size === SMALL_SIZE ? SMALL_BODY_WIDTH : MEDIUM_BODY_WIDTH;
    else
        return SMALL_BODY_WIDTH;
}

const Container = styled.div`
    width: ${(props:Props) => getWidth(props.cardSize) + 'em'};
`
const Header = styled.div`
    display:block;
`
const Body = styled.div`
    display:block;
    border-left: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-right: 1px solid rgba(0,0,0,.125);
    border-radius: 0px 0px 3px 3px;
    width: ${(props:Props) => getWidthBody(props.cardSize) + 'em'};
`
const Title = styled.div``
const Text = styled.div``

const Footer = styled.div``

const TravelCard = ({cardSize,destination,departureDate,imageSrc,note,returnDate}:Props) => {

    return( 
        <Container className='travelCardDivContainer' cardSize={cardSize}>
            <Header className='travelCardHeader'>
               <TravelImage imageSize={cardSize} src={getResource(imageSrc)} />
            </Header>
            <Body cardSize={cardSize} className='travelCardBody'>
                <Title>{destination} </Title>
                <Text> {note}</Text>
                <Text> {departureDate}</Text>
                <Text> {returnDate}</Text>
            </Body>
            <Footer className='travelCardFooter'/>
        </Container>
    )
};

export default TravelCard;