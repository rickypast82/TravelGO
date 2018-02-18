//@flow

export function checkState<S>(state:?S):S {
    if(state !== null && state !== undefined){
      return state;
    }
    else
      throw new Error("Error: you must set root (state)");
}
