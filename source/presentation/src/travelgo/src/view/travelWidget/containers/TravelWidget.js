//@flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { type State} from '../../../lib/redux-helper';
import { 
    type DestinationsT,
    getAllDestinations 
} from '../../../modules/travel';
import TravelCard from '../components/TravelCard';

//Prova da cancellare
import { DESTINATIONS } from './test/mockeddata';

type StateProps = {|
    destinations:DestinationsT
|};

const ContainerDiv = styled.div``;

const TravelWidgetContainer = ({destinations}: StateProps) => { 

    return (
        <ContainerDiv id='TravelWidgetContainerDiv'>
            {destinations.map(item => (
                <TravelCard key={item.id} 
                    id={item.id}
                    destination={item.destination} 
                    departureDate={item.departureDate} 
                    note={item.note}
                    returnDate={item.returnDate}
                    imageSrc='Roma.jpg'/>))}
        </ContainerDiv>
    )
};
const mapStateToProps = (state:State):StateProps => ({
    destinations: DESTINATIONS//getAllDestinations(state)
});


export { TravelWidgetContainer, mapStateToProps };
export default connect(mapStateToProps)(TravelWidgetContainer);