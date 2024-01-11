import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe("Testing the <CourseListRow /> Component", () => {
	
    let wrapper;
    
	it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        const props = {
            isHeader: true,
            textFirstCell: "test",
            textSecondCell: null
        }
        wrapper = shallow(<CourseListRow shouldRender {...props} />);
		expect(wrapper.html()).to.equal(`<tr><th colSpan="2">${props.textFirstCell}</th></tr>`);
    });
    
    it("renders two cells when textSecondCell is present", () => {
		const props = {
            isHeader: true,
            textFirstCell: "test",
            textSecondCell: "test2"
        }
        wrapper = shallow(<CourseListRow shouldRender {...props} />);
        expect(wrapper.html()).to.equal(`<tr><th>${props.textFirstCell}</th><th>${props.textSecondCell}</th></tr>`);
    });
    
    it("renders correctly two td elements within a tr element", () => {
		const props = {
            isHeader: false,
            textFirstCell: "test",
            textSecondCell: "test2"
        }
        wrapper = shallow(<CourseListRow shouldRender {...props} />);
        expect(wrapper.html()).to.equal(`<tr><td>${props.textFirstCell}</td><td>${props.textSecondCell}</td></tr>`);
	});

});