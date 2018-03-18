//@flow
/*eslint no-magic-numbers: "off"*/
import {type DestinationsT, BaseTravelRecord} from '../../../../modules/travel';
import { Map } from 'immutable';

const BASE_TRAVEL_1 = BaseTravelRecord({
    id:1,
    destination:'Rome',
    departureDate:100,
    returnDate:200,
    note:'note di roma'
});

const BASE_TRAVEL_2 = BaseTravelRecord({
    id:2,
    destination:'Venice',
    departureDate:300,
    returnDate:400,
    note:'note di venezia'
});

export const DESTINATIONS:DestinationsT = Map({
    1: BASE_TRAVEL_1,
    2: BASE_TRAVEL_2
});