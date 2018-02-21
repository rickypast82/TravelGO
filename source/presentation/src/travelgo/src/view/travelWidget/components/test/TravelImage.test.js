//@flow
/*eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import TravelImage,{ getWidth } from '../TravelImage'
import { SMALL_SIZE, MEDIUM_SIZE} from '../../constants'

describe('TravelImage components test', () => {
    
    it('getWidth from imageSize small', () => {
        const size = getWidth(SMALL_SIZE);
        expect(size).toEqual(15);
    });

    it('getWidth from imageSize medium', () => {
        const size = getWidth(MEDIUM_SIZE);
        expect(size).toEqual(25);
    });

    it('getWidth from imageSize undefined', () => {
        const size = getWidth();
        expect(size).toEqual(15);
    });

    it('renders without crashing with all props', () => {
        const wrapper = shallow( <TravelImage src='Roma.jpg'/>);
        expect(wrapper).toMatchSnapshot();
    });

});
