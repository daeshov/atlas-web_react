// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme'; // Assuming you are using enzyme for testing
import Footer from './Footer';
import { getFullYear } from '../utils'; // Adjust the path accordingly

describe('Footer Component', () => {
  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain(getFullYear() + ' - Holberton School');
  });
});
