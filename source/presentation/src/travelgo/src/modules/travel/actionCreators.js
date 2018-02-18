//@flow
import { actionCreatorBase, type Action } from '../../lib/redux-helper'
import { UPDATE_COMPLETED_TRAVELS,SELECT_DESTINATION} from './actionDefinitions'

type BaseCompletedTravelsT = {|
    destination:string,
    departureDate:?number,
    returnDate:?number,
    note:string
|}

export type CompletedTravelsT = {|
    travels:Array<BaseCompletedTravelsT>
|};

export function updateCompletedTravels(travels:CompletedTravelsT):Action<CompletedTravelsT>{
    return actionCreatorBase(UPDATE_COMPLETED_TRAVELS,travels);
}

export type SelectIdDestionationT = {|idDestination:number|}

export function selectDestination(idDestination:SelectIdDestionationT):Action<SelectIdDestionationT>{
    return actionCreatorBase(SELECT_DESTINATION,idDestination);
}

