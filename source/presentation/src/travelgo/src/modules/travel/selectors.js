//@flow
import { Map } from 'immutable'
import { createSelector } from 'reselect'
import { type State, checkState } from '../../lib/redux-helper'
import { type TravelRecordType, BaseTravelRecord } from './reducer'

let getRoot = (s:TravelRecordType) => s; 
export function setRootTravel(root:State=>?TravelRecordType){
    getRoot = root;
}

export const getTravel = (state:State):TravelRecordType => checkState(getRoot(state));

export const getAllDestinations = createSelector( [getTravel],(travel) => {
    return travel.destinations || Map();
});


export const getSelectedDestinationId = createSelector( [getTravel],(travel) => {
    return travel.selectedDestination || -1;
});

export const getSelectedDestinationItem =  createSelector( [getAllDestinations,getSelectedDestinationId],
    (allDestinations, selectedId) => {
    return allDestinations.get(selectedId) || BaseTravelRecord();
});
