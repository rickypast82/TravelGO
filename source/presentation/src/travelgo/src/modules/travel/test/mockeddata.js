//@flow
/*eslint no-magic-numbers: "off"*/
import {Map} from 'immutable'
import { BaseTravelRecord, TravelRecord, type TravelRecordT} from '../reducer'
import { type CompletedTravelsT} from '../actionCreators'

const base1= {
    destination:'Rome',
    departureDate:1000,
    returnDate:1500,
    note:'note di Rome'
};
const base2= {
    destination:'New York',
    departureDate:1800,
    returnDate:2000,
    note:'note di New York'
};
const base3= {
    destination:'Bangkok',
    departureDate:2200,
    returnDate:3000,
    note:'note di Bangkok'
};
export const COMPLETED_TRAVELS:CompletedTravelsT = {travels:[base1,base2,base3]};

export const BASE_TRAVEL1 = BaseTravelRecord ({
    id:1,
    destination:'Rome',
    departureDate:1000,
    returnDate:1500,
    note:'note di Rome'
});

const BASE_TRAVEL2 = BaseTravelRecord ({
    id:2,
    destination:'New York',
    departureDate:1800,
    returnDate:2000,
    note:'note di New York'
});

const BASE_TRAVEL3 = BaseTravelRecord ({
    id:3,
    destination:'Bangkok',
    departureDate:2200,
    returnDate:3000,
    note:'note di Bangkok'
});

const MAP1 = Map();
export const TRAVEL_MAP = MAP1.withMutations(map => {
    map.set(1, BASE_TRAVEL1).set(2, BASE_TRAVEL2).set(3,BASE_TRAVEL3)
});

export const TRAVEL_STATE_NO_SELECTION:TravelRecordT = TravelRecord({
    destinations: TRAVEL_MAP,
    selectedDestination: -1
})

export const TRAVEL_STATE_WITH_SELECTION:TravelRecordT = TravelRecord({
    destinations: TRAVEL_MAP,
    selectedDestination: 1
})