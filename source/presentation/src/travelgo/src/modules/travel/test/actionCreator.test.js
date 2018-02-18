//@flow
/*eslint no-magic-numbers: "off"*/
import {
    selectDestination,
    updateCompletedTravels,
    type CompletedTravelsT}
from '../actionCreators';
import { UPDATE_COMPLETED_TRAVELS, SELECT_DESTINATION} from '../actionDefinitions';
import { Action } from '../../../lib-redux-helper/index';

describe('travels action creators test', () => {

    it('UPDATE_COMPLETED_TRAVELS Action', () => {
        const base1= {
            destination:'roma',
            departureDate:100,
            returnDate:200,
            note:'note di roma'
        };
        const base2= {
            destination:'genova',
            departureDate:300,
            returnDate:400,
            note:'note di genova'
        };
        const travels:CompletedTravelsT = [base1,base2];

        const expected:Action<CompletedTravelsT> = {
            type: UPDATE_COMPLETED_TRAVELS,
            payload: travels
        }
        const resUpdate = updateCompletedTravels(travels);
        expect(resUpdate).toEqual(expected)
    });


    it('SELECT_DESTINATION Action', () => {

        const expectedDestination:Action<number> = {
            type: SELECT_DESTINATION,
            payload:{
                idDestination:1
            }
        }
        const actualDestination = selectDestination({idDestination:1});
        expect(actualDestination).toEqual(expectedDestination);
    });
});