//@flow
import { type Action, actionCreatorBase } from '../../redux-helper'
import { UPDATE_TRAVEL_LIST} from './actionDefinitions'
type TravelList = {|
    travels:Array<string>
|};

export const updateTravelList = (travels:TravelList):Action =>{
    return actionCreatorBase(UPDATE_TRAVEL_LIST,travels);
}
