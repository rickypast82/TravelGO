//@flow
import { Record, List} from 'immutable'
import { UPDATE_COMPLETED_TRAVELS } from './actionDefinitions'
import { type CompletedTravels } from './actionCreators'
import { createLeaf, createReducer }  from '../../lib-redux-helper'

const TravelRecord = Record(({
    names: List()
}:{|
    names:List<string>
|}))

const initialState = TravelRecord();
export type TravelRecordType = typeof initialState;

const updateCompletedTravels = function(state:TravelRecordType, payload:CompletedTravels):TravelRecordType{
    const {travels} = payload;
    const names = List(travels);
    return state.set('names',names);
}

const travel = createReducer(initialState,[
    createLeaf( UPDATE_COMPLETED_TRAVELS, updateCompletedTravels)
]);

export {TravelRecord};
export default travel;