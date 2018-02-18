//@flow
import type {Leaf,ActionType} from '../typeHelper'
import {createLeaf} from '../reducerHelper'


describe('redux reducer test', () => {

    type State = {
        toggle:boolean,
        otherProp:number
    };
    type Payload = {| toggle:boolean |};
    const type:ActionType = "SELECT";
    
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
});