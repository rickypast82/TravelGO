//@flow
/*eslint no-magic-numbers: "off"*/
import {getWidth} from '../TravelImage'
import { SMALL_SIZE, MEDIUM_SIZE} from '../../constants'

describe('TravelImage components test', () => {
    
    it('getWidth from imageSize small', () => {
        const size = getWidth(SMALL_SIZE);
        expect(size).toEqual(25);
    });

    it('getWidth from imageSize medium', () => {
        const size = getWidth(MEDIUM_SIZE);
        expect(size).toEqual(45);
    });

});
