//@flow
/*eslint no-magic-numbers: "off"*/
import React from 'react';
import { shallow } from 'enzyme';
import { TravelWidgetContainer } from '../TravelWidget';
import { DESTINATIONS } from './mockeddata';
describe('TravelWidgetContainer  test', () => {
 
    it('renders without crashing with all props', () => {
        const wrapper = shallow( 
            <TravelWidgetContainer destinations={DESTINATIONS} />);
        expect(wrapper).toMatchSnapshot();
    });
/*
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
    */

});
