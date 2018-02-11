import {Map} from 'immutable'
import { BaseTravelRecord, TravelRecord, type TravelRecordType} from '../reducer'
import { type CompletedTravelsT} from '../actionCreators'

const base1= {
    destination:'Rome',
    departureDate:1000,
    returnDate:1500
};
const base2= {
    destination:'New York',
    departureDate:1800,
    returnDate:2000
};
const base3= {
    destination:'Bangkok',
    departureDate:2200,
    returnDate:3000
};
export const COMPLETED_TRAVELS:CompletedTravelsT = {travels:[base1,base2,base3]};

const BASE_TRAVEL1 = BaseTravelRecord ({
    id:1,
    destination:'Rome',
    departureDate:1000,
    returnDate:1500,
});

const BASE_TRAVEL2 = BaseTravelRecord ({
    id:2,
    destination:'New York',
    departureDate:1800,
    returnDate:2000,
});

const BASE_TRAVEL3 = BaseTravelRecord ({
    id:3,
    destination:'Bangkok',
    departureDate:2200,
    returnDate:3000,
});

const MAP1 = Map();
const TRAVEL_MAP = MAP1.withMutations(map => {
    map.set(1, BASE_TRAVEL1).set(2, BASE_TRAVEL2).set(3,BASE_TRAVEL3)
});


export const TRAVEL_STATE:TravelRecordType = TravelRecord({
    destinations: TRAVEL_MAP
})