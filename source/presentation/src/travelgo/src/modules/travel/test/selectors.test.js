// @flow
import * as matchers from 'jest-immutable-matchers';
import * as MOCK from './mockeddata';

import { 
    getTravel, 
    getAllDestinations,
    getSelectedDestinationId,
    getSelectedDestinationItem
} from '../selectors';

import { BaseTravelRecord } from '../reducer'

describe('Travel selectors', () => {

    beforeEach(() => {
        // $FlowFixMe
        jest.addMatchers(matchers);
    });

    it('retrieves a valid travel record (valid state)', () => {
        const travel = getTravel(MOCK.TRAVEL_STATE_NO_SELECTION);
        // $FlowFixMe
        expect(travel).toEqualImmutable(MOCK.TRAVEL_STATE_NO_SELECTION);
    });

    it('retrieves all destinations', () => {
        const destinations = getAllDestinations(MOCK.TRAVEL_STATE_NO_SELECTION);
        // $FlowFixMe
        expect(destinations).toEqualImmutable(MOCK.TRAVEL_MAP);
    });

    it('getSelectedDestinationId', () => {
        const id = getSelectedDestinationId(MOCK.TRAVEL_STATE_NO_SELECTION);
        expect(id === -1).toBeTruthy();
    });

    it('getSelectedDestinationId with existing id', () => {
        const destination = getSelectedDestinationItem(MOCK.TRAVEL_STATE_WITH_SELECTION);
        // $FlowFixMe
        expect(destination).toEqualImmutable(MOCK.BASE_TRAVEL1);
    });

    it('getSelectedDestinationId with not existing id', () => {
        const destination = getSelectedDestinationItem(MOCK.TRAVEL_STATE_NO_SELECTION);
        // $FlowFixMe
        expect(destination).toEqualImmutable(BaseTravelRecord());
    });
    
});