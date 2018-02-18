// @flow
import * as matchers from 'jest-immutable-matchers';
import * as MOCK from './mockeddata';

import { getTravel, getAllDestinations} from '../selectors';

describe('Travel selectors', () => {

    beforeEach(() => {
        // $FlowFixMe
        jest.addMatchers(matchers);
    });

    it('retrieves a valid travel record (valid state)', () => {
        const travel = getTravel(MOCK.TRAVEL_STATE_NO_SELECTION);
        expect(travel === MOCK.TRAVEL_STATE_NO_SELECTION).toBeTruthy();
    });

    it('retrieves all destinations', () => {
        const destinations = getAllDestinations(MOCK.TRAVEL_STATE_NO_SELECTION);
        expect(destinations === MOCK.TRAVEL_MAP).toBeTruthy();
    });

    /*it('retrieves destination with details by id', () => {
        const destination1 = getDestinationById(1);
        expect(destination1 === MOCK.BASE_TRAVEL1).toBeTruthy();
    });
    */
});