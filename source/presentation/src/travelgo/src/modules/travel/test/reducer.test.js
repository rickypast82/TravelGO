//@flow
import * as matchers from 'jest-immutable-matchers'
import travel, {TravelRecord, type TravelRecordType } from '../reducer'
import { updateCompletedTravels, selectDestination } from '../actionCreators'
import {COMPLETED_TRAVELS, TRAVEL_STATE_NO_SELECTION,TRAVEL_STATE_WITH_SELECTION} from './mockeddata'

describe('travel  reducer test', () => {

    beforeEach(function () {
        jest.addMatchers(matchers);
      });
    
    it('update completed travels', () => {
        const stateBefore:TravelRecordType = TravelRecord();
        const stareAfter = travel(stateBefore,updateCompletedTravels(COMPLETED_TRAVELS));
        expect(stareAfter).toEqualImmutable(TRAVEL_STATE_NO_SELECTION);
    });

    it('select destination', () => {
        const stateBefore:TravelRecordType = TRAVEL_STATE_NO_SELECTION;
        const stareAfter = travel(stateBefore,selectDestination({idDestination:1}));
        expect(stareAfter).toEqualImmutable(TRAVEL_STATE_WITH_SELECTION);
    });

    
});
