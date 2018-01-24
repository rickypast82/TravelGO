//@flow
import { updateCompletedTravels, type CompletedTravels } from '../actionCreators';
import { UPDATE_COMPLETED_TRAVELS } from '../actionDefinitions';
import { Action } from '../../../lib-redux-helper/index';

describe('travels action creators test', () => {

    it('UPDATE_COMPLETED_TRAVELS Action', () => {
        const travels:CompletedTravels = { travels: ['rome', 'NY'] };
        const expected:Action<CompletedTravels> = {
            type: UPDATE_COMPLETED_TRAVELS,
            payload: travels
        }
        const resUpdate = updateCompletedTravels(travels);
        expect(resUpdate).toEqual(expected)
    });


});