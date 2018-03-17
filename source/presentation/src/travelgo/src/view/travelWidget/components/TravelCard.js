//@flow
import React from 'react';
//import styled from 'styled-components';
import { getResource } from '../../../lib/resource-utility/utils';
import { Card, CardHeader, CardDescription, CardContent, CardMeta, FeedDate} from '../../../gui';
import TravelImage from './TravelImage';

type Props = {|
    departureDate ?: number,
    destination: string,
    id: number,
    imageSrc: string,
    note: string,
    returnDate ?: number
|};

const TravelCard2 = ({ destination, departureDate, imageSrc, note, returnDate }: Props) => {

    return (
        <Card>
            <CardContent>
                <CardHeader> { destination} </CardHeader>
                <TravelImage src={getResource(imageSrc)} />
                <CardMeta>
                    <FeedDate>{ departureDate} </FeedDate> 
                    <FeedDate>{ returnDate} </FeedDate> 
                </CardMeta>
            </CardContent>
            <CardContent>
                <CardDescription> {note} </CardDescription>
            </CardContent>
        </Card>
    )
};

export default TravelCard2;