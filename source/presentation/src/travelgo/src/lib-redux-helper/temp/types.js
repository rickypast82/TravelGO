// @flow
import type {Reducer, Store as ReduxStore,Dispatch as ReduxDispatch} from 'redux';
export type Action<T> = {
    type: string,
    payload: T,
    error?: boolean,
    meta?: {}
}

export type Handler<S,P> = (state:S, paylod:P, error?:boolean) => S; 

export type Leaf<S,P> = {
  type:string,
  handler:Handler<S,P>
};

export type State = *;

export type ReducersMap = {[string]:[Reducer<any,Action<any>>, (any => any)=>void] | Reducer<any,any>};


export type Store = ReduxStore<State, Action<any>>;
export type GetState = () => State;
export type Dispatch = ReduxDispatch<Action<any>>;