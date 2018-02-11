//@flow
import { updateCompletedTravels, type CompletedTravelsT} from '../actionCreators';
import { UPDATE_COMPLETED_TRAVELS } from '../actionDefinitions';
import { Action } from '../../../lib-redux-helper/index';

describe('travels action creators test', () => {

    it('UPDATE_COMPLETED_TRAVELS Action', () => {
        const base1= {
            destination:'roma',
            departureDate:100,
            returnDate:200
        };
        const base2= {
            destination:'genova',
            departureDate:300,
            returnDate:400
        };
        const travels:CompletedTravelsT = [base1,base2];

        const expected:Action<CompletedTravelsT> = {
            type: UPDATE_COMPLETED_TRAVELS,
            payload: travels
        }
        const resUpdate = updateCompletedTravels(travels);
        expect(resUpdate).toEqual(expected)
    });


});