//@flow
import { actionCreatorBase } from '../../redux-helper'
import { UPDATE_TRAVEL_LIST} from './actionDefinitions'
export type TravelList = {|
    travels:Array<string>
|};

export type ActionUpdateTravelList = {
    type:typeof UPDATE_TRAVEL_LIST,
    payload:TravelList
};

export const updateTravelList = (travels:TravelList):ActionUpdateTravelList =>{
    
    return actionCreatorBase(UPDATE_TRAVEL_LIST,travels);
}

