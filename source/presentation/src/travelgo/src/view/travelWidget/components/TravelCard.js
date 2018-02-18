//@flow
import React from 'react'
import styled from 'styled-components'

type Props = {|
    id:number,
    destination:string,
    departureDate:?number,
    returnDate:?number,
    note:string
|};

const Container = styled.div`
`
const TravelCard = (props:Props) => {
    return( 
        <Container>
            {props.destination}
        </Container>
    )
};

export default TravelCard;