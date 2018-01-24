//@flow
import type {
    Action,
    ActionType,
    Handler,
    Leaf,
    GetRoot,
    SetRoot
} from './typeHelper'
import type {Reducer} from 'redux'
import { combineReducers } from 'redux-immutable';

export function createLeaf<S,P> (type:ActionType, handler: Handler<S,P>):Leaf<S,P>{
    return {
      type,
      handler
    }
  }

export function createReducer<S>(initialState:S, leaves:Array<Leaf<S,*>>):Reducer<S,Action<*>>{
	const handlers:{[string]:Handler<S,*>} = {};
	for(const leaf of leaves){
		handlers[leaf.type] = leaf.handler;
	}
	return function reducer(state?:S = initialState, action?:Action<*>) {
		if(action === null || action === undefined)
			return state;
		if (handlers.hasOwnProperty(action.type)) {
			const {payload, error}:{payload:{}, error?: boolean} = action;
			return handlers[action.type](state, payload, error);
		} 
		else {
			return state;
		}
	}
}

export type ReducersMap = {[string]:[Reducer<any,Action<any>>, (any => any)=>void] | Reducer<any,any>};

export function combineReducersAndSelector(reducersMap:ReducersMap){
    const keys = Object.keys(reducersMap);
    const reducers:{[string]:Reducer<*,*>} = {};
    keys.forEach(key => {
        if(typeof reducersMap[key] === "object"){
            reducers[key] = reducersMap[key][0];
            const getRoot:GetRoot = state => state.get(key);
            const setRoot:SetRoot = reducersMap[key][1];
            setRoot(getRoot);
        }
        else {
        reducers[key] = reducersMap[key];
        }
    
    });
    return combineReducers(reducers);
  
}
