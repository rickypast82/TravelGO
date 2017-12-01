
import { Record, List} from 'immutable'
import { UPDATE_TRAVEL_LIST } from './actionDefinitions'

const TravelRecord = Record({
    names: List(['Rome','New York'])
})

const updateTravelList = (state,action) =>{
    const {travels} = action.payload;
    const names = List(travels);
    return state.set('names',names);
}

const initialState = TravelRecord();
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