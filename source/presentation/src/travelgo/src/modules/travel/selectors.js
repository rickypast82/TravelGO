//@flow
import { createSelector } from 'reselect'
import { type State, checkState } from '../../lib-redux-helper'
import { type TravelRecordType } from './reducer'

let getRoot = (s:TravelRecordType) => s; 
export function setRootTravel(root:State=>?TravelRecordType){
    getRoot = root;
}

export const getTravel = (state:State):TravelRecordType => checkState(getRoot(state));

export const getTravelNames = createSelector( [getTravel],(travel) => {
    return travel ? travel.names : null;
} ); 