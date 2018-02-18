// @flow

export function getResource(src:string): any {
    if (process.env.NODE_ENV === 'production') {
        return src;
    }
    else {
        //$FlowFixMe
        const resource = require('../../../images/mock/' + src);
        return resource;
    }
}