//@flow
import type {Action, ActionType, ActionMeta} from '../typeHelper'
import {actionCreatorBase, actionCreatorMeta, actionCreatorError} from '../actionCreatorHelper'

describe('redux creators test', () => {

    type Payload = {};
    const payload:Payload={
        prova:'prova'
    }
    const type:ActionType= 'type'; 
    it('creators Base Action', () => {
 
        const actual = actionCreatorBase('type', payload);
        const expected:Action<Payload> = {
            type,
            payload
        }
       expect(actual).toEqual(expected)
    });

    it('creators Meta Action', () => {
        const meta:ActionMeta={
            meta:'meta prova'
        };
        const actual = actionCreatorMeta('type', payload, meta);
        const expected:Action<Payload> = {
            type,
            payload,
            meta
        }
       expect(actual).toEqual(expected)
    });

    it('creators Error action', () => {
        const expected:Action<Payload> = {
            type,
            payload,
            error:true
        }
        const actual:Action<Payload> = actionCreatorError(type, payload);
        expect(actual).toEqual(expected);
    });

});