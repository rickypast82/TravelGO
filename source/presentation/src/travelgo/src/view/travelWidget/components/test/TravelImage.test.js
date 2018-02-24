//@flow
/*eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import TravelImage from '../TravelImage'

describe('TravelImage components test', () => {

    it('renders without crashing with all props', () => {
        const wrapper = shallow( <TravelImage src='Roma.jpg'/>);
        expect(wrapper).toMatchSnapshot();
    });

});
