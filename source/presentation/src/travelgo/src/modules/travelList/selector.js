
import { createSelector } from 'reselect'

export const getTravelList = (state) => {
    return state ? state.get('travelList') : null;
}

export const getTravelNames = createSelector( [getTravelList],(travels) => travels ? travels.names : null ); 