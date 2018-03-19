//@flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CardGroup } from '../../../gui';

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

const ContainerDiv = styled(CardGroup)`
    padding: 1em;
    background-color:#f7f0b2;
`;

const TravelWidgetContainer = ({destinations}: StateProps) => { 
    const destinationsObject = destinations.toArray();
    return (
        <ContainerDiv id='TravelWidgetContainerDiv'>
            {destinationsObject.map(item =>(
                <TravelCard key={item.id} 
                    id={item.id}
                    destination={item.destination} 
                    departureDate={item.departureDate} 
                    note={item.note}
                    returnDate={item.returnDate}
                    imageSrc='Roma.jpg'/>
                ))
            }
                
        </ContainerDiv>
    )
};
const mapStateToProps = (state:State):StateProps => ({
    destinations: DESTINATIONS//getAllDestinations(state)
});


export { TravelWidgetContainer, mapStateToProps };
export default connect(mapStateToProps)(TravelWidgetContainer);