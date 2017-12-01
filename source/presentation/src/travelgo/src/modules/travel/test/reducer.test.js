
import { List } from 'immutable'
import * as matchers from 'jest-immutable-matchers';
import travel, {TravelRecord} from '../reducer'
import { updateTravelList, type TravelList} from '../actionCreators'

describe('travel  reducer test', () => {

    beforeEach(function () {
        jest.addMatchers(matchers);
      });
    
    it('update travel list', () => {
        const stateBefore = TravelRecord();
        const travels:TravelList = {travels:['Rome','New York']};
        const stareAfter = travel(stateBefore,updateTravelList(travels));
        const stateExpected = TravelRecord({
            names: List(['Rome','New York'])
        })
        expect(stareAfter).toEqualImmutable(stateExpected);
    });

    
});
