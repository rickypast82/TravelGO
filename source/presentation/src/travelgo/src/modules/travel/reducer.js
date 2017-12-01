
import { Record, List} from 'immutable'
import { UPDATE_TRAVEL_LIST } from './actionDefinitions'
import { Action }  from '../../redux-helper'

const TravelRecord = Record(({
    names: List()
}:{|
    names:List<string>
|}))

const initialState = TravelRecord();
export type TravelRecordType = typeof initialState;

const updateTravelList = (state:TravelRecordType,action:Action) =>{
    const {travels} = action.payload;
    const names = List(travels);
    return state.set('names',names);
}

//$FlowFixMe
const travel = (state = initialState, action)  => {
    switch (action.type) {
        case UPDATE_TRAVEL_LIST:{
            return updateTravelList(state,action);
        }
        default:{
            return state;
        }
    }    
}

export {TravelRecord};
export default travel;