//@flow
import React from 'react';
import styled from 'styled-components';
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

const CardMetaCustom = styled(CardMeta)`
    display: flex;
`

const TravelCard = ({ destination, departureDate, imageSrc, note, returnDate }: Props) => {

    return (
        <Card>
            <CardContent>
                <CardHeader> { destination} </CardHeader>
                <TravelImage src={getResource(imageSrc)} />
                <CardMetaCustom>
                    <FeedDate>{ departureDate} </FeedDate> 
                    <FeedDate>{ returnDate} </FeedDate> 
                </CardMetaCustom>
            </CardContent>
            <CardContent>
                <CardDescription> {note} </CardDescription>
            </CardContent>
        </Card>
    )
};

export default TravelCard;