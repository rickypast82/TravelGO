//@flow
import { Record, Map} from 'immutable'
import { UPDATE_COMPLETED_TRAVELS, SELECT_DESTINATION } from './actionDefinitions'
import { type CompletedTravelsT, type SelectIdDestionationT } from './actionCreators'
import { createLeaf, createReducer }  from '../../lib/redux-helper'

type TravelDestination=string;
type TravelNote=string;

export const BaseTravelRecord = Record(({
    id:-1,
    destination:'',
    departureDate:null,
    returnDate:null,
    note:''
}:{|
    id:number,
    destination:TravelDestination,
    departureDate:?number, //saranno dei long
    returnDate:?number,
    note:TravelNote
|}))

const baseTravelState = BaseTravelRecord();
export type BaseTravelRecordT = typeof baseTravelState;

export type DestinationsT = Map<number,BaseTravelRecordT>;

const TravelRecord = Record(({
    destinations: Map(),
    selectedDestination: -1
}:{|
    destinations:DestinationsT,
    selectedDestination:number
|}))

const initialState = TravelRecord();
export type TravelRecordT = typeof initialState;

const updateCompletedTravels = function(state:TravelRecordT, payload:CompletedTravelsT):TravelRecordT{
    const {travels} = payload;
    if(travels){
        let index = 0;
        const map1 = Map();
        const destinations = map1.withMutations(map=>{
            travels.forEach(function(item) {
                const base = BaseTravelRecord({
                    id:++index,
                    destination:item.destination,
                    departureDate:item.departureDate,
                    returnDate:item.returnDate,
                    note: item.note
                })
                return map.set(index, base);

            });
        })
        
        return state.set('destinations',destinations); 
    }
    return state;
}

const selectDestination = function(state:TravelRecordT, payload:SelectIdDestionationT):TravelRecordT{
    const {idDestination} = payload;
    return state.set('selectedDestination',idDestination);
}

const travel = createReducer(initialState,[
    createLeaf( UPDATE_COMPLETED_TRAVELS, updateCompletedTravels),
    createLeaf( SELECT_DESTINATION, selectDestination)
]);

export {TravelRecord};
export default travel;