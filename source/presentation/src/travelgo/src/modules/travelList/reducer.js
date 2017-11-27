import { Record, Map, List} from 'immutable'
import { UPDATE_TRAVEL_LIST } from './actionDefinitions'

const TravelRecord = Record({
    names: List()
})

const manageUpdateTravelList = (state,travels) =>{

}

const initialState = TravelRecord();
const travelList = (state = initialState, action)  => {
    switch (action.type) {
        case UPDATE_TRAVEL_LIST:{
            const {travels} = action.payload;
            return manageUpdateTravelList(state,travels);
        }
        default:{
            return state;
        }
    }    
}

export default travelList;