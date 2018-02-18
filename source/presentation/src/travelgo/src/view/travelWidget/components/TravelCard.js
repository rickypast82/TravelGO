//@flow
import React from 'react'
import styled from 'styled-components'
import TravelImage from './TravelImage'

type Props = {|
    id:number,
    destination:string,
    departureDate:?number,
    returnDate:?number,
    note:string,
    cardSize?:string, //TODO
    imageSrc?:string
|};

const Container = styled.div`
    display:block;
    width: 20em;
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
               <TravelImage src={props.imageSrc} />
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