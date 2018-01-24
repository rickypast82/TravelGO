//@flow
import type {
    ActionMeta,
    ActionType,
    Action
} from './typeHelper'


export function actionCreatorBase<P>(type:ActionType, payload:P):Action<P>{
    return {
        type,
        payload
    }
}

export function actionCreatorMeta<P> (type:ActionType, payload:P, meta:ActionMeta):Action<P>{
    return {
        type,
        payload,
        meta
    }
}

export function actionCreatorError<P> (type:ActionType,payload:P):Action<P>{
    return {
        type,
        payload,
        error:true
    }
}
