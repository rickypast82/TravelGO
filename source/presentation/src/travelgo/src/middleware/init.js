const init = ({dispatch,getState}) => next => action =>{
    if(action.type !== 'START_APP'){
        return next(action);
    }
    console.log('Start App')

    const {url,success} = ;

    return next(action);
}

export default apiREST;