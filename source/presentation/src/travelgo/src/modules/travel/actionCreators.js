//@flow
import { actionCreatorBase, type Action } from '../../lib-redux-helper'
import { UPDATE_COMPLETED_TRAVELS} from './actionDefinitions'

type BaseCompletedTravelsT = {|
    destination:string,
    departureDate:?number,
    returnDate:?number
|}

export type CompletedTravelsT = {|
    travels:Array<BaseCompletedTravelsT>
|};

export function updateCompletedTravels(travels:CompletedTravelsT):Action<CompletedTravelsT>{
    return actionCreatorBase(UPDATE_COMPLETED_TRAVELS,travels);
}

