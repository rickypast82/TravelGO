//@flow
type ActionType=string;
export type ActionPayload = {[string]:any};
type ActionMeta = {[string]:any};

export type Action = {
    type:ActionType,
    payload:ActionPayload,
    meta?:ActionMeta
}

export const actionCreatorBase = (type:ActionType,payload:ActionPayload):Action => {
    return {
        type,
        payload
    }
}

export const actionCreatorMeta = (type:ActionType,payload:ActionPayload,meta:ActionMeta):Action => {
    return {
        type,
        payload,
        meta
    }
}
