
import {createAction, createErrorAction, createActionMeta, createLeaf,createReducer, checkState, combineReducersAndSelector} from '../helper'
import type {Action, Leaf, ReducersMap} from '../types'
import type {Reducer} from 'redux'
jest.mock('redux-immutable');
import { combineReducers} from 'redux-immutable';

type Payload = {| toggle:boolean |};
const payload:Payload = {toggle:true};
const type = "SELECT";

describe('Fetch action helper', () => {
    it('create a regular action', () => {
        const expected:Action<Payload> = {
            type,
            payload
        }
        const actual:Action<Payload> = createAction(type, payload);
        expect(actual).toEqual(expected);
    });

    it('create a error action', () => {
        const expected:Action<Payload> = {
            type,
            payload,
            error:true
        }
        const actual:Action<Payload> = createErrorAction(type, payload);
        expect(actual).toEqual(expected);
    });

    it('create a action with meta', () => {
        const meta = {
            source:'user'
        }
        const expected:Action<Payload> = {
            type,
            payload,
            meta
        }
        const actual:Action<Payload> = createActionMeta(type, payload,meta);
        expect(actual).toEqual(expected);
    });
});

describe('Fetch reducer helper', () => {
    type State = {
        toggle:boolean,
        otherProp:number
    };
    
    function handler (state:State, payload:Payload):State{
        return {...state, toggle: payload.toggle}
    }
    it('create a leaf', () => {
        const expected = {
            type,
            handler,
        }
        const actual:Leaf<State,Payload> = createLeaf(type, handler);
        expect(actual).toEqual(expected);
    });

    it('create a reducer', () => {
        const type2 = "OTHER_TYPE";
        type Payload2 = {| otherProp:number |};
        const payload2:Payload2 = {otherProp:1};
        function handler2 (state:State, payload2:Payload2):State{
            return {...state, otherProp: payload2.otherProp}
        }
        const initialState:State = {
            toggle:false,
            otherProp: 0
        };
        const reducer:(State,Action<*>)=>State = createReducer(initialState, [
            createLeaf(type, handler),
            createLeaf(type2, handler2)]
        );
        //mi aspetto che il reducer creato sia una funzione
        expect(reducer).toBeInstanceOf(Function);
        //provo a lanciare delle action per verificare che il reducer richiami gli handler

        let newState:State = reducer(initialState, createAction(type, payload));
        expect(newState.toggle).toBe(true);
        expect(newState.otherProp).toBe(0);
        //modifico otherprop
        newState = reducer(newState, createAction(type2, payload2));
        expect(newState.toggle).toBe(true);
        expect(newState.otherProp).toBe(1);
    });
});

describe('Fetch selection helper', () => {
    it('check state valid', () => {
        const state = {toogle:true};
        const checked = checkState(state);
        expect(checked).toBe(state);
    });

    it('check state null', () => {
        let ok = false;
        try{
            checkState(null);
        }
        catch(err){
            //OK, checkstate lancia un'eccezione
            ok = true;
        }
        expect(ok).toBeTruthy();
    });

    it('check state undefined', () => {
        let ok = false;
        try{
            checkState();
        }
        catch(err){
            //OK, checkstate lancia un'eccezione
            ok = true;
        }
        expect(ok).toBeTruthy();
    });

    it('check state 0', () => {
        const state = 0;//verifichiamo che zero non sia considerato come booleano false
        const checked = checkState(state);
        expect(checked).toBe(state);
    });
});    

describe('Fetch selection/reducer helper', () => {
    const reducer:Reducer<any,any> = (s:string) => s;
    it('check combineReducers with simpy map of reducer', () => {
        const reducersMap:ReducersMap = {
            a: reducer,
            b: reducer,
            c: reducer
        }
        const combinedReducer:{[string]:Reducer<any,any>} = {};
        combineReducers.mockImplementation((reducersMap:{[string]:Reducer<any,any>}) => {
            combinedReducer.a = reducersMap.a;
            combinedReducer.b = reducersMap.b;
            combinedReducer.c = reducersMap.c;
        });
        combineReducersAndSelector(reducersMap);
        expect(combinedReducer.a).toBe(reducersMap.a);
        expect(combinedReducer.b).toBe(reducersMap.b);
        expect(combinedReducer.c).toBe(reducersMap.c);
    });

    it('check combineReducers with  map of reducer and selector', () => {
        const setRoot1:(any=>any) = jest.fn();
        const setRoot2:(any=>any) = jest.fn();
        const reducersMap:ReducersMap = {
            a: [reducer,setRoot1],
            b: reducer,
            c: [reducer,setRoot2]
        }
        const combinedReducer:{[string]:Reducer<any,any>} = {};
        //il combine reducer mockato ci aspettiamo riceva cmq una mappa chiave=>reducer
        combineReducers.mockImplementation((reducersMap:{[string]:Reducer<any,any>}) => {
            combinedReducer.a = reducersMap.a;
            combinedReducer.b = reducersMap.b;
            combinedReducer.c = reducersMap.c;
        });
        combineReducersAndSelector(reducersMap);
        expect(combinedReducer.a).toBe(reducersMap.a[0]);
        expect(combinedReducer.b).toBe(reducersMap.b);
        expect(combinedReducer.c).toBe(reducersMap.c[0]);
        //mi aspetto che siano stato chiamate le setRoot
        expect(setRoot1.mock.calls.length).toBe(1);
        expect(setRoot2.mock.calls.length).toBe(1);
        expect(typeof setRoot1.mock.calls[0][0]).toBe("function");
        expect(typeof setRoot2.mock.calls[0][0]).toBe("function");
    });
});