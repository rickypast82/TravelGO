//@flow
/*eslint no-magic-numbers: "off"*/
import React from 'react';
import { shallow } from 'enzyme';
import TravelCard from '../TravelCard';

describe('TravelCard components test', () => {
 
    it('renders without crashing with all props', () => {
        const wrapper = shallow( 
            <TravelCard 
                id={1}
                destination='Roma' 
                note='note roma' 
                departureDate={200} 
                returnDate={300}
                imageSrc='Roma.jpg'
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
