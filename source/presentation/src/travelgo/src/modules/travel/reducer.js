//@flow
import { Record, Map} from 'immutable'
import { UPDATE_COMPLETED_TRAVELS } from './actionDefinitions'
import { type CompletedTravelsT } from './actionCreators'
import { createLeaf, createReducer }  from '../../lib-redux-helper'

type TravelDestination=string;

export const BaseTravelRecord = Record(({
    id:-1,
    destination:'',
    departureDate:null,
    returnDate:null
}:{|
    id:number,
    destination:TravelDestination,
    departureDate:?number, //saranno dei long
    returnDate:?number
|}))

const baseTravelState = BaseTravelRecord();
export type BaseTravelRecordType = typeof baseTravelState;

const TravelRecord = Record(({
    destinations: Map(),
}:{|
    destinations:Map<TravelDestination,BaseTravelRecordType>
|}))

const initialState = TravelRecord();
export type TravelRecordType = typeof initialState;

const updateCompletedTravels = function(state:TravelRecordType, payload:CompletedTravelsT):TravelRecordType{
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
                    returnDate:item.returnDate
                })
                return map.set(index, base);

            });
        })
        
        return state.set('destinations',destinations); 
    }
    return state;
}

const travel = createReducer(initialState,[
    createLeaf( UPDATE_COMPLETED_TRAVELS, updateCompletedTravels)
]);

export {TravelRecord};
export default travel;