// @flow
import type {Action, Leaf, Handler, ReducersMap} from './types'
import type {Reducer} from 'redux'
import { combineReducers } from 'redux-immutable';

//start helper for action

/**
 * 
 * @param {string} type 
 * @param {object} payload 
 */
export function createAction<P>(type:string, payload:P):Action<P>{
  return {
    type,
    payload
  }
}

/**
 * 
 * @param {string} type 
 * @param {object} payload 
 * @param {meta} meta
 */
export function createActionMeta<P>(type:string, payload:P, meta:{}):Action<P>{
  return {
    type,
    payload,
    meta
  }
}

/**
 * 
 * @param {string} type 
 * @param {object} payload 
 */
export function createErrorAction<P>(type:string, payload:P):Action<P>{
  return {
    type,
    payload,
    error:true
  }
}

//start helper for reducer

/**
 * 
 * @param {string} type 
 * @param {Handler<S,P>} handler 
 */
export function createLeaf<S,P>(type:string, handler: Handler<S,P>):Leaf<S,P>{
  return {
    type,
    handler
  }
}

/**
 * 
 * @param {S} initialState 
 * @param {Array<Leaf<S,*>>} leaves 
 */
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
      return handlers[action.type](state, payload, error)
    } else {
      return state;
    }
  }
}

//start helper for selector


/**
 * 
 * @param {*} state 
 */
export function checkState<T>(state:?T):T {
  if(state !== null && state !== undefined){
    return state;
  }
  else
    throw new Error("Have u forgot to set getRoot or your state?");
}

type GetRoot = (Map<string,*>) => any;
type SetRoot = (GetRoot) => void;

//start helper for reducers/selector
/**
 * 
 * @param {*} reducers 
 */
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