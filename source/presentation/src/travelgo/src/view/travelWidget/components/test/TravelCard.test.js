//@flow
/*eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import TravelCard, { getWidth} from '../TravelCard'
import { SMALL_SIZE, MEDIUM_SIZE} from '../../constants'

describe('TravelCard components test', () => {
    
    it('getWidth from imageSize small', () => {
        const size = getWidth(SMALL_SIZE);
        expect(size).toEqual(25);
    });

    it('getWidth from imageSize medium', () => {
        const size = getWidth(MEDIUM_SIZE);
        expect(size).toEqual(35);
    });

    it('getWidth from imageSize undefined', () => {
        const size = getWidth();
        expect(size).toEqual(25);
    });

    it('renders without crashing with all props', () => {
        const wrapper = shallow( 
            <TravelCard 
                id={1}
                destination='Roma' 
                note='note roma' 
                departureDate={200} 
                returnDate={300}
                imageSrc='Roma.jpg'
                cardSize={MEDIUM_SIZE}
            />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders without crashing with required props', () => {
        const wrapper = shallow( 
            <TravelCard 
                id={1}
                destination='Roma' 
                note='note roma' 
                imageSrc='Roma.jpg'
            />);
        expect(wrapper).toMatchSnapshot();
    });

});
