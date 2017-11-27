const apiREST = ({dispatch,getState}) => next => action =>{
    if(action.type !== 'API_REST'){
        return next(action);
    }
    console.log('apirest')

    const {url,success} = action;
    fetch(url)
        .then(response=>response.json)
        .then(data=>dispatch(success(data)))
    return next(action);
}

export default apiREST;