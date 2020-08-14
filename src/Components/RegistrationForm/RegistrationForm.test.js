import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationForm from './RegistrationForm'
import { it } from 'date-fns/locale';

describe(`RegistrationForm component`, () => {
    const props = {
        className: 'test-class-name',
        'data-other': 'test-other-prop'
    }

    it('renders the RegistrationForm given props', () => {
        const wrapper = shallow(<RegistrationForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})