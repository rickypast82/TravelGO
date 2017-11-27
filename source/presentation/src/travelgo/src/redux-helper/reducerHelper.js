//@flow
import {type ActionPayload, type Action} from './actionCreatorHelper'
import {type State} from './storeHelper'

export type createLeaf = (state:State,payload:ActionPayload) => State;
export type createReducer = (state:State,action:Action) => State;
