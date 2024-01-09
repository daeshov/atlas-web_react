import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFullYear } from '../utils';

describe('Footer Component', () => {
  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain(getFullYear() + ' - Holberton School');
  });
});
