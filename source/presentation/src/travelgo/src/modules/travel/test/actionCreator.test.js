//@flow
import { updateTravelList, type TravelList,type ActionUpdateTravelList } from '../actionCreators';
import { UPDATE_TRAVEL_LIST } from '../actionDefinitions';

describe('travel list action creators test', () => {

    it('UPDATE_TRAVEL_LIST Action', () => {
        const travels:TravelList = { travels: ['rome', 'NY'] };
        const expected:ActionUpdateTravelList = {
            type: UPDATE_TRAVEL_LIST,
            payload: travels
        }
        const resUpdate = updateTravelList(travels);
        expect(resUpdate).toEqual(expected)
    });


});