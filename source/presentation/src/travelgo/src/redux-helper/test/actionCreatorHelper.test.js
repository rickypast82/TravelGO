//@flow
import {actionCreatorBase,actionCreatorMeta, type Action} from '../actionCreatorHelper'

describe('redux creators test', () => {
    
    it('creators Base Action', () => {
        const payload={
            prova:'prova'
        }
        const actual = actionCreatorBase('type', payload);
        const expected:Action = {
            type:'type',
            payload
        }
       expect(actual).toEqual(expected)
    });

    it('creators Meta Action', () => {
        const payload={
            prova:'prova'
        };
        const meta={
            prova:'prova'
        };
        const actual = actionCreatorMeta('type', payload, meta);
        const expected:Action = {
            type:'type',
            payload,
            meta
        }
       expect(actual).toEqual(expected)
    });

});