
import { List } from 'immutable'
import * as matchers from 'jest-immutable-matchers';
import travel, {TravelRecord, type TravelRecordType} from '../reducer'
import { updateCompletedTravels, type CompletedTravels} from '../actionCreators'

describe('travel  reducer test', () => {

    beforeEach(function () {
        jest.addMatchers(matchers);
      });
    
    it('update completed travels', () => {
        const stateBefore:TravelRecordType = TravelRecord();
        const travels:CompletedTravels = {travels:['Rome','New York']};
        const stareAfter = travel(stateBefore,updateCompletedTravels(travels));
        const stateExpected:TravelRecordType = TravelRecord({
            names: List(['Rome','New York'])
        })
        expect(stareAfter).toEqualImmutable(stateExpected);
    });

    
});
