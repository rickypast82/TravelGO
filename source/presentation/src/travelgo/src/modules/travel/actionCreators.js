//@flow
import { actionCreatorBase, type Action } from '../../lib-redux-helper'
import { UPDATE_COMPLETED_TRAVELS} from './actionDefinitions'

export type CompletedTravels = {|
    travels:Array<string>
|};

export function updateCompletedTravels(travels:CompletedTravels):Action<CompletedTravels>{
    return actionCreatorBase(UPDATE_COMPLETED_TRAVELS,travels);
}

