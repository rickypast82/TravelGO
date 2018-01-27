// @flow
import {List} from 'immutable'
import * as matchers from 'jest-immutable-matchers';
import * as MOCK from './mockeddata';

import { getTravel, getTravelNames} from '../selectors';

describe('Travel selectors', () => {

    beforeEach(() => {
        // $FlowFixMe
        jest.addMatchers(matchers);
    });

    it('retrieves a valid travel record (valid state)', () => {
        const travel = getTravel(MOCK.TRAVEL_STATE);
        console.log(MOCK.TRAVEL_STATE);
        expect(travel === MOCK.TRAVEL_STATE).toBeTruthy();
    });

    it('retrieves travel names', () => {
        const names = getTravelNames(MOCK.TRAVEL_STATE);
        expect(names === MOCK.TRAVEL_NAMES).toBeTruthy();
    });
    
});