import * as matchers from 'jest-immutable-matchers';
import travel, {TravelRecord, type TravelRecordType} from '../reducer'
import { updateCompletedTravels} from '../actionCreators'
import {TRAVEL_STATE, COMPLETED_TRAVELS} from './mockeddata'

describe('travel  reducer test', () => {

    beforeEach(function () {
        jest.addMatchers(matchers);
      });
    
    it('update completed travels', () => {
        const stateBefore:TravelRecordType = TravelRecord();
        const stareAfter = travel(stateBefore,updateCompletedTravels(COMPLETED_TRAVELS));
        expect(stareAfter).toEqualImmutable(TRAVEL_STATE);
    });

    
});
